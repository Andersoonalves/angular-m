import { forwardRef } from '@angular/core';
import { NgModule } from '@angular/core';

import { ForeachEntityTypeDirective } from './foreach.entity.type.directive';
import { ForeachPropertyTypeDirective } from './foreach.property.type.directive';
import { ForeachPropertyDirective } from './foreach.property.directive';

export const META_DIRECTIVES = [
  forwardRef(() => ForeachEntityTypeDirective),
  forwardRef(() => ForeachPropertyTypeDirective),
  forwardRef(() => ForeachPropertyDirective)
];

@NgModule({
    declarations: [
        META_DIRECTIVES
    ],
    exports: [
        META_DIRECTIVES
    ]
})
export class MetaModule { }
