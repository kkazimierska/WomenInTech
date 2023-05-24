import { Status } from "../domain/models"
export {windfarmData, turbineData}

let windfarmData = [
    {
        id: '0',
        name: 'Bamboo Watch',
        image: 'wind_1.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '1',
        name: 'Black Watch',
        image: 'wind_2.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '2',
        name: 'Blue Band',
        image: 'wind_3.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '3',
        name: 'Blue T-Shirt',
        image: 'wind_4.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '4',
        name: 'Bracelet',
        image: 'wind_5.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '5',
        name: 'Brown Purse',
        image: 'wind_1.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '6',
        name: 'Chakra Bracelet',
        image: 'wind_2.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '7',
        name: 'Galaxy Earrings',
        image: 'wind_3.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '8',
        name: 'Game Controller',
        image: 'wind_4.jpg',
        power: 0,
        status: Status.UNKNOWN
    },
    {
        id: '9',
        name: 'Gaming Set',
        image: 'wind_5.jpg',
        power: 0,
        status: Status.UNKNOWN
    }
  ]


  let turbineData = [
    {
        id: '0001',
        power: 65,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '0',
    },
    {
        id: '1001',
        power: 72,
        workingTime: 5,
        status: Status.OFFLINE,
        windfarmId: '1',
    },
    {
      id: '1001',
      power: 15,
      workingTime: 5,
      status: Status.ONLINE,
      windfarmId: '1',
  },
  {
      id: '1001',
      power: 75,
      workingTime: 5,
      status: Status.OFFLINE,
      windfarmId: '1',
  },
  {
    id: '1001',
    power: 42,
    workingTime: 5,
    status: Status.OFFLINE,
    windfarmId: '1',
},
{
  id: '1001',
  power: 5,
  workingTime: 5,
  status: Status.OFFLINE,
  windfarmId: '1',
},
{
id: '1001',
power: 12,
workingTime: 5,
status: Status.OFFLINE,
windfarmId: '1',
},
    {
        id: '1002',
        power: 79,
        workingTime: 6,
        status: Status.ONLINE,
        windfarmId: '2',
    },
    {
        id: '1003',
        power: 29,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '3',
    },
    {
        id: '1004',
        power: 15,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '4',
    },
    {
        id: '1005',
        power: 120,
        workingTime: 10,
        status: Status.OFFLINE,
        windfarmId: '5',
    },
    {
        id: '1006',
        power: 32,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '6',
    },
    {
        id: '1007',
        power: 34,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '7',
    },
    {
        id: '1008',
        power: 99,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '8',
    },
    {
        id: '1009',
        power: 299,
        workingTime: 10,
        status: Status.ONLINE,
        windfarmId: '9',
    }
  ]