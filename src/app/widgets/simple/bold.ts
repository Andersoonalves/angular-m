import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type'

@Component({
    selector: 'bold-text',
    template: '<b>{{entitytype.name}}</b>',
})
export class BoldText {

    @Input()  public entitytype: EntityType;
};