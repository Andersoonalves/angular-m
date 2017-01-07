import { Component, Input } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';
import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'mg-bold-text',
    template: '<b>{{entitytype.name}}</b><br>',
})
export class BoldTextComponent extends EntityTypeComponent {
    public entitytype: EntityType;
}
