import { Component, Input } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';
import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'mg-plain-text',
    template: '{{entitytype.name}}<br>',
})
export class PlainTextComponent extends EntityTypeComponent {
    public entitytype: EntityType;
}
