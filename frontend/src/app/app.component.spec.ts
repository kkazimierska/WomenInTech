import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { StoreService } from './service/store.service';
import { WindFarmListComponent } from './components/wind-farm-list/wind-farm-list.component';
import { WindTurbineListComponent } from './components/wind-turbine-list/wind-turbine-list.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule, ToastModule],
    declarations: [AppComponent, WindFarmListComponent, WindTurbineListComponent],
    providers: [StoreService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'windfarm_tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('windfarm_tracker');
  });

});
