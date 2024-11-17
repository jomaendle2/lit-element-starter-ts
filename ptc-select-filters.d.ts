import { LitElement } from 'lit';
import { Department, EntityValue, Filter, Filters, Position, Venue } from './models/departments.model';
import { Entity } from './models/entity.model';
export declare class PtcSelectFilters extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    venues: Venue[];
    departments: Department[];
    positions: Position[];
    selectedEntities: Filters;
    filterSelectionPopover: HTMLElement;
    addFilter(entity: Filter): void;
    get filterSections(): {
        label: string;
        type: Entity;
        data: EntityValue[];
    }[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=ptc-select-filters.d.ts.map