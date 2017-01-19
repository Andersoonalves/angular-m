import { Component } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'th [mgTh]',
    template: '{{propertyType.name | titleCase}}',
})
export class ThComponent extends PropertyTypeComponent { }
