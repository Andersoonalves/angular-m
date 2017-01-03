import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'm-bold-text',
    template: '<b>{{entitytype.name}}</b>',
})
export class BoldTextComponent {

    @Input()  public entitytype: EntityType;
};
