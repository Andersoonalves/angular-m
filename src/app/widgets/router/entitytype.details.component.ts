import { Component } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';

@Component({
  template: `
    <h2>Details</h2>
    <button routerLink="/">Back</button>
  `
})
export class EntityTypeDetailsComponent extends EntityTypeComponent {}
