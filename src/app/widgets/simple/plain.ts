import { Component, Input } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';

@Component({
    selector: 'mg-plain-text',
    template: '{{entitytype.name}}<br>',
})
export class PlainTextComponent extends EntityTypeComponent {}
