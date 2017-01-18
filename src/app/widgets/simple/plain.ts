import { Component } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';

@Component({
    selector: 'mg-plain-text',
    template: '{{entityType.name}}<br>',
})
export class PlainTextComponent extends EntityTypeComponent { }
