export interface Windfarm {
    id?: number;
    name?: string;
    power?: number;
    status?: string;
}

export interface Turbine {
    id: number;
    energy_produced: number;
    working_time: number;
    status: string;
    windfarm: number;
    host: string;
}

export interface IAppStore {
    selectedWindfarmId: number;
    windfarms: Windfarm[];
    turbines: Turbine[];
}


export enum Status {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE",
    UNKNOWN = "UNKNOWN"
  }
