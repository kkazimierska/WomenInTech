import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';

import { WindTurbineListComponent } from './wind-turbine-list.component';

describe('WindTurbineListComponent', () => {
  let component: WindTurbineListComponent;
  let fixture: ComponentFixture<WindTurbineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, TableModule],
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
