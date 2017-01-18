import { forwardRef } from '@angular/core';
import { NgModule } from '@angular/core';

import { ForeachEntityTypeDirective } from './foreach.entity.type.directive';
import { ForeachPropertyTypeDirective } from './foreach.property.type.directive';
import { ForeachPropertyDirective } from './foreach.property.directive';
import { ForeachEntityDirective } from './foreach.entity.directive';
import { EntityDirective } from './entity.directive';

export const META_DIRECTIVES = [
  forwardRef(() => ForeachEntityTypeDirective),
  forwardRef(() => ForeachPropertyTypeDirective),
  forwardRef(() => ForeachPropertyDirective),
  forwardRef(() => ForeachEntityDirective),
  forwardRef(() => EntityDirective)
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
