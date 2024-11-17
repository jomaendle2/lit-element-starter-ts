import { Entity } from './entity.model';
export interface Venue {
    id: number;
    name: string;
    holidays: string[];
    departments: Department[];
}
export interface Department {
    id: number;
    name: string;
    color: string;
    positions: Position[];
    timeScheduleEmployeeOrder: number[];
}
export interface Position {
    id: number;
    name: string;
    color?: string;
}
export type EntityValue = Venue | Department | Position;
export interface Filter {
    type: Entity;
    value: string;
}
export type Filters = Filter[];
//# sourceMappingURL=departments.model.d.ts.map