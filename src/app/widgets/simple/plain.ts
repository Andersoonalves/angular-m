import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'mg-plain-text',
    template: '{{entitytype.name}}<br>',
})
export class PlainTextComponent {

    @Input()  public entitytype: EntityType;
};
