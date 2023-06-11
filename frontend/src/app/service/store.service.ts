import { Injectable } from '@angular/core';
import { IAppStore, Turbine, Windfarm, PingResponse } from '../domain/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: IAppStore = {
    selectedWindfarmId: 0,
    windfarms: [],
    turbines: []
  }
  appStore: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

  on<IAppStore>(): Observable<IAppStore>{
    return this.appStore.asObservable();
  }

  emit<IAppStore>(data: IAppStore) {
    this.appStore.next(data);
  }

  selectWindfarm(windfarmId: number) {
    this.store = {...this.store, selectedWindfarmId: windfarmId, turbines: []};
    this.emit(this.store)
    this.getTurbineData(windfarmId);
  }

  getWindfarmData() {
    this.http.get<Windfarm[]>("http://127.0.0.1:8000/api/wind_farms/").subscribe(
        windfarms => {
          this.store.windfarms = windfarms
          this.emit(this.store);
        }
      );
    }

  getTurbineData(windfarmId: number) {
    this.http.get<any[]>(`http://127.0.0.1:8000/api/wind_turbines?windfarm_id=${windfarmId}`)
    .subscribe(
        turbines => {
          this.store.turbines = turbines;
          this.calculateWindfarmPower(this.store.selectedWindfarmId);
          this.checkWindfarmStatus(this.store.selectedWindfarmId);
          this.emit(this.store);
        }
      )
    }
  private calculateWindfarmPower(windfarmId: number) {
    const windfarm = this.getWindfarmById(windfarmId);
    let powerProduced = this.store.turbines.reduce(
      (acc, obj) => acc + obj.energy_produced,
      0
    );

    windfarm.power = powerProduced
  }

  private checkWindfarmStatus(windfarmId: number) {
    const windfarm = this.getWindfarmById(windfarmId);
    let faulty = this.store.turbines.find(turbine => turbine.status == "offline");
    if (faulty){
      windfarm.status = "offline"
    }
    else{
      windfarm.status = "online"
    }
  }

  private getTurbineById(turbineId: number): Turbine {
    const turbine = this.store.turbines.find(turbine => turbine.id == turbineId);
    if (!turbine){ throw new Error('Turbine not found!'); }
    return turbine;
  }

  private getWindfarmById(windfarmId: number): Windfarm {
    const windfarm = this.store.windfarms.find(windfarm => windfarm.id == windfarmId);
    if (!windfarm){ throw new Error('Windfarm not found!'); }
    return windfarm;
  }

  pingAllTurbines(windfarmId: number){
    this.store.turbines.map(turbine => turbine.status = "unknown");
    this.emit(this.store);
    this.http.get<PingResponse>(`http://127.0.0.1:8000/ping/?windfarm_id=${windfarmId}`)
    .subscribe(
        data => {
          this.store.turbines = data.wind_turbines;
          this.calculateWindfarmPower(this.store.selectedWindfarmId);
          this.checkWindfarmStatus(this.store.selectedWindfarmId);
          this.emit(this.store);
        }
      )
    this.emit(this.store);
  }

}
