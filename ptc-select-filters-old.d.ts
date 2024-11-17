import { LitElement } from 'lit';
import { EntityValue } from './models/departments.model';
export declare class PtcSelectFiltersOld extends LitElement {
    static styles: import("lit").CSSResult;
    entitySelectRef?: HTMLSelectElement;
    entityValueSelectRef?: HTMLSelectElement;
    constructor();
    entities: readonly ["department", "venue", "position"];
    entityValues: EntityValue[];
    onSelectEntity(): void;
    addEntityToFilter(): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=ptc-select-filters-old.d.ts.map