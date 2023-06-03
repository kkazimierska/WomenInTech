export interface Windfarm {
    id?: number;
    name?: string;
    power?: number;
    status?: Status;
}

export interface Turbine {
    id: number;
    energy_produced: number;
    working_time: number;
    status: Status;
    windfarm: number;
    host: string;
}

export interface IAppStore {
    selectedWindfarmId: number;
    windfarms: Windfarm[];
    turbines: Turbine[];
}

export interface PingResponse{
    wind_turbines: Turbine[]
}

export type Status = "online" | "offline" | "unknown"