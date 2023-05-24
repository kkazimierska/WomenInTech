import { Injectable } from '@angular/core';
import { IAppStore, Turbine, Windfarm, Status } from '../domain/models';
import { BehaviorSubject, Observable, delay, map, of } from 'rxjs';
import { turbineData, windfarmData } from './data';
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
    this.http.get<any[]>(`http://127.0.0.1:8000/api/wind_turbines?windfarm_id=${windfarmId}`).pipe(
        map(
          turbineList => turbineList.map(
            turbine => {
              if (turbine.status == "ONLINE") {
                turbine.status = Status.ONLINE
              } else if(turbine.status == "OFFLINE") {
                turbine.status = Status.OFFLINE
              }
              else {
                turbine.status = Status.UNKNOWN
              }
              return turbine
            })
        )
      ).subscribe(
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
    let faulty = this.store.turbines.find(turbine => turbine.status == Status.OFFLINE);
    if (faulty){
      windfarm.status = Status.OFFLINE
    }
    else{
      windfarm.status = Status.ONLINE
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

  switchTurbine(turbineId: number) {
    const turbine = this.getTurbineById(turbineId);
    const currentStatus = turbine?.status
    if (currentStatus == Status.OFFLINE){
      turbine.status = Status.ONLINE;
    }else{
      turbine.status = Status.OFFLINE;
    }
    this.emit(this.store);
  }

  fixAllTurbines(windfarmId: number){
    this.store.turbines.map(
      turbine => {
        if (turbine.windfarm == windfarmId){
          turbine.status = Status.ONLINE;
        }
      }
    )
    this.emit(this.store);
  }

}
