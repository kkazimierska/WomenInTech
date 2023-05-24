import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindTurbineListComponent } from './wind-turbine-list.component';

describe('WindTurbineListComponent', () => {
  let component: WindTurbineListComponent;
  let fixture: ComponentFixture<WindTurbineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindTurbineListComponent]
    });
    fixture = TestBed.createComponent(WindTurbineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
