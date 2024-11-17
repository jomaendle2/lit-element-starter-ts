var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property, query } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import { fetchWrapper } from './service/api';
let PtcSelectFilters = class PtcSelectFilters extends LitElement {
    constructor() {
        super();
        this.venues = [];
        this.departments = [];
        this.positions = [];
        this.selectedEntities = [];
        fetchWrapper('venue').then((venues) => {
            this.venues = venues.data;
            console.log('xx', this.venues);
            for (const venue of this.venues) {
                for (const department of venue.departments) {
                    for (const position of department.positions) {
                        if (this.positions.find((p) => p.id === position.id)) {
                            continue;
                        }
                        this.positions.push(position);
                    }
                    if (this.departments.find((d) => d.id === department.id)) {
                        continue;
                    }
                    this.departments.push(department);
                }
            }
        });
    }
    addFilter(entity) {
        if (this.selectedEntities.find((e) => e.value === entity.value)) {
            return;
        }
        this.selectedEntities = [...this.selectedEntities, entity];
        this.filterSelectionPopover.hidePopover();
    }
    get filterSections() {
        return [
            {
                label: 'Venues',
                data: this.venues,
                type: 'venue',
            },
            {
                label: 'Departments',
                data: this.departments,
                type: 'department',
            },
            {
                label: 'Positions',
                data: this.positions,
                type: 'position',
            },
        ];
    }
    render() {
        return html `
      <div>
        <button popovertarget="filter-selection-popover">Add Filter</button>

        <div class="filter-item-wrapper">
          ${this.selectedEntities.map((entity) => html `
                <div class="filter-item">${entity.type}: ${entity.value}</div>
              `)}
        </div>
      </div>

      <div id="filter-selection-popover" popover>
        ${this.filterSections.map((section) => html `
            <section>
              <label>${section.label}</label>
              <div class="filter-item-wrapper">
                ${section.data.map((v) => html ` <div
                    class="filter-item"
                    @click=${() => this.addFilter({
            type: section.type,
            value: v.name,
        })}
                  >
                    ${v.name}
                  </div>`)}
              </div>
            </section>
          `)}
      </div>
    `;
    }
};
PtcSelectFilters.styles = css `
    :host {
      display: block;
      font-family: sans-serif;
    }

    span.filter {
      border: solid 1px gray;
      border-radius: 5px;
      padding: 0.25rem 0.5rem;
    }

    button {
      background-color: #004ea1;
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    .filter-item {
      padding: 0.25rem 0.5rem;
      background-color: #fbd5d5;
      border-radius: 0.5rem;
      cursor: pointer;
    }

    .filter-item:hover {
      background-color: #f9acac;
    }

    .filter-item-wrapper {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    #filter-selection-popover {
      margin-inline: 2rem;
      border-radius: 10px;
      padding: 1rem;
    }

    #filter-selection-popover > section {
      margin-bottom: 1rem;
    }

    #filter-selection-popover > section > label {
      font-size: 1.2rem;
      font-weight: bold;
    }
  `;
__decorate([
    property({ type: Array })
], PtcSelectFilters.prototype, "venues", void 0);
__decorate([
    property({ type: Array })
], PtcSelectFilters.prototype, "departments", void 0);
__decorate([
    property({ type: Array })
], PtcSelectFilters.prototype, "positions", void 0);
__decorate([
    property({ type: Array })
], PtcSelectFilters.prototype, "selectedEntities", void 0);
__decorate([
    query('#filter-selection-popover')
], PtcSelectFilters.prototype, "filterSelectionPopover", void 0);
__decorate([
    property({ type: Array })
], PtcSelectFilters.prototype, "filterSections", null);
PtcSelectFilters = __decorate([
    customElement('ptc-select-filters')
], PtcSelectFilters);
export { PtcSelectFilters };
//# sourceMappingURL=ptc-select-filters.js.map