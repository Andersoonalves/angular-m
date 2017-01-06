import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'mg-bold-text',
    template: '<b>{{entitytype.name}}</b><br>',
})
export class BoldTextComponent {

    @Input()  public entitytype: EntityType;
};
