export interface Tank {
    id: string;
    title: string;
    capacity: number;
    consumption: number;
    supply_day: number;
    next_supply: string; // timestamp
}
