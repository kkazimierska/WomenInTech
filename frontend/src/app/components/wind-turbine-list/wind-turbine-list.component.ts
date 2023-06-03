import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Turbine } from 'src/app/domain/models';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-wind-turbine-list',
  templateUrl: './wind-turbine-list.component.html',
  styleUrls: ['./wind-turbine-list.component.css']
})
export class WindTurbineListComponent implements OnInit{
  turbines: Turbine[] = []
  selectedWindfarmId: number = 0;

  appStore$: Observable<any>;

  constructor(private storeService: StoreService){
    this.appStore$ = storeService.on();
  }

  ngOnInit(): void {
    this.appStore$.subscribe(
      appStore => {
        this.turbines = appStore.turbines;
        this.selectedWindfarmId = appStore.selectedWindfarmId;
      }
    )
  }
}
