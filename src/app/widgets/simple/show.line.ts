import { EntityType } from '../../meta/entity.type';
import { Component, Input } from '@angular/core';

import { PropertyComponent } from '../../meta/property.component';

@Component({
    selector: 'mg-show-line',
    template: 
        `<p><strong>{{property.propertyType.name}}:</strong> {{property.value}}</p>`,
})
export class ShowLineComponent extends PropertyComponent { }
