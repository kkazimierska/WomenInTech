import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppStore, Windfarm, Status } from 'src/app/domain/models';
import { StoreService } from 'src/app/service/store.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-wind-farm-list',
  templateUrl: './wind-farm-list.component.html',
  styleUrls: ['./wind-farm-list.component.css'],
  providers: [MessageService],
})
export class WindFarmListComponent implements OnInit{
  responsiveOptions: any[] = [];
  selectedWindfarmId: number = 0;
  windfarms:Windfarm[] = [];

  appStore$: Observable<IAppStore>;

  constructor(private messageService: MessageService, private storeService: StoreService) {
    this.appStore$ = this.storeService.on();
  }

  ngOnInit() {
    this.appStore$.subscribe(
      appStore => {
        this.selectedWindfarmId = appStore.selectedWindfarmId;
        this.windfarms = appStore.windfarms;
      }
      )
    this.storeService.getWindfarmData();

    this.responsiveOptions = this.getResponsiveOptions();
  }

  windfarmClicked(windfarmId: number){
    if (windfarmId != this.selectedWindfarmId){
      this.storeService.selectWindfarm(windfarmId);
    }
  }

  refreshWindfarm(windfarmId: number){
      this.storeService.selectWindfarm(windfarmId);
  }


  getSeverity(status: Status) {
    switch (status) {
        case "online":
            return 'success';
        case "offline":
            return 'danger';
        case "unknown":
            return 'info';
        default:
          throw new Error("status unknown!");
    }
  }

  isLoading() {
    return !this.windfarms;
  }

fixAllTurbines(windfarmId: number){
  this.storeService.fixAllTurbines(windfarmId);
  this.messageService.add({ severity: 'info', summary: 'Success', detail: 'All turbines have been fixed' });
}


getResponsiveOptions(){
  return [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
}


}
