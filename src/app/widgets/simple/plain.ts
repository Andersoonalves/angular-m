import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'm-plain-text',
    template: '{{entitytype.name}}',
})
export class PlainTextComponent {

    @Input()  public entitytype: EntityType;
};
