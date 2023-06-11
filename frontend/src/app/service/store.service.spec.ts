
import { HttpClient } from '@angular/common/http';
import {of} from 'rxjs';
import { IAppStore, Turbine } from '../domain/models';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: StoreService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StoreService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate power for a windfarm', () =>{
    //Arrange
    //Assume there is an initial store with Windfarm but no data for turbines
    service.store = {
      "selectedWindfarmId": 2,
      "windfarms": [
          {
            "id": 2,
            "name": "Grossecen",
            "power": 0,
            }   
      ],
      "turbines": []
    }

    // Prepare some mock data
    const testData: Turbine[] = [
      {"id":3,"status":"offline","host":"72.30.2.43","energy_produced":58,"working_time":14,"windfarm":2},
      {"id":4,"status":"online","host":"40.114.177.156","energy_produced":110,"working_time":4,"windfarm":2}
    ]
    httpClientSpy.get.and.returnValue(of(testData));
    
    //Act
    service.getTurbineData(2)

    //Assert
    expect(service.store.windfarms[0]["power"]).toBe(168)
  });  


  it('should set proper status for turbines', () =>{
    //Arrange
    //Assume there is an initial store with Windfarm but no data for turbines
    service.store = {
      "selectedWindfarmId": 2,
      "windfarms": [
          {
            "id": 2,
            "name": "Grossecen",
            "power": 0,
            }   
      ],
      "turbines": []
    }

    // Prepare some mock data
    const testData: Turbine[] = [
      {"id":3,"status":"offline","host":"72.30.2.43","energy_produced":58,"working_time":14,"windfarm":2},
      {"id":4,"status":"online","host":"40.114.177.156","energy_produced":110,"working_time":4,"windfarm":2}
    ]
    httpClientSpy.get.and.returnValue(of(testData));
    
    //Act
    service.getTurbineData(2)

    //Assert
    for (let i = 0; i < testData.length; i++) {
      expect(service.store.turbines[i]["status"]).toBe(testData[i]["status"])
    }
  });  

});
