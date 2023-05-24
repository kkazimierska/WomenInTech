import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindFarmListComponent } from './wind-farm-list.component';

describe('WindFarmListComponent', () => {
  let component: WindFarmListComponent;
  let fixture: ComponentFixture<WindFarmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
