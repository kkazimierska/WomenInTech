import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { WindFarmListComponent } from './wind-farm-list.component';

describe('WindFarmListComponent', () => {
  let component: WindFarmListComponent;
  let fixture: ComponentFixture<WindFarmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastModule, ProgressSpinnerModule],
      declarations: [WindFarmListComponent]
    });
    fixture = TestBed.createComponent(WindFarmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
