var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { fetchWrapper } from './service/api';
import { entitiesArray } from './models/entity.model';
let PtcSelectFiltersOld = class PtcSelectFiltersOld extends LitElement {
    constructor() {
        super();
        this.entities = entitiesArray;
        this.entityValues = [];
        fetchWrapper('venue').then(async (response) => {
            const venues = response.data;
        });
    }
    onSelectEntity() {
        const entity = this.entities[this.entitySelectRef?.selectedIndex || 0];
        if (!entity) {
            console.error('Entity not found');
            return;
        }
        fetchWrapper(entity).then(async (response) => {
            this.entityValues = response.data;
        });
    }
    addEntityToFilter() {
        const entityIndex = this.entitySelectRef?.selectedIndex || 0;
        const entityValueIndex = this.entityValueSelectRef?.selectedIndex || 0;
        const entity = this.entities[entityIndex];
        const entityValue = this.entityValues[entityValueIndex];
    }
    render() {
        return html `
      <fieldset>
        <legend>Entity</legend>
        <div class="entity-select-input">
          <select id="entity-select" @change=${this.onSelectEntity}>
            ${this.entities.map((entity) => html `<option>${entity}</option>`)}
          </select>

          <select id="entity-value-select">
            ${this.entityValues.map((entity) => html `<option>${entity.name}</option>`)}
          </select>
          
          <button @click=${this.addEntityToFilter}>
            Add
          </button>
        </div>

      </fieldset>
    `;
    }
};
PtcSelectFiltersOld.styles = css `
      :host {
          display: block;
          font-family: sans-serif;
      }

      .entity-select-input {
          display: flex;
          gap: 1rem;
      }

      input[type="text"] {
          border: solid 1px #ccc;
          padding: 0.5rem;
          border-radius: 0.25rem;
      }
  `;
__decorate([
    query('#entity-select')
], PtcSelectFiltersOld.prototype, "entitySelectRef", void 0);
__decorate([
    query('#entity-value-select')
], PtcSelectFiltersOld.prototype, "entityValueSelectRef", void 0);
__decorate([
    property({ type: Array })
], PtcSelectFiltersOld.prototype, "entities", void 0);
__decorate([
    property({ type: Array })
], PtcSelectFiltersOld.prototype, "entityValues", void 0);
PtcSelectFiltersOld = __decorate([
    customElement('ptc-select-filters-2')
], PtcSelectFiltersOld);
export { PtcSelectFiltersOld };
//# sourceMappingURL=ptc-select-filters-old.js.map