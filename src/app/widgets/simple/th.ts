import { Component, Input } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'th [mgTh]',
    template: '{{propertytype.name | titleCase}}',
})
export class ThComponent extends PropertyTypeComponent { }
