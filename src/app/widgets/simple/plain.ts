import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type'

@Component({
    selector: 'plain-text',
    template: '{{entitytype.name}}',
})
export class PlainText {

    @Input()  public entitytype: EntityType;
};