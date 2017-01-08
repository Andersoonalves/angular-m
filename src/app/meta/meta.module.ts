import { NgModule } from '@angular/core';

import { ForeachEntityTypeDirective } from './foreach.entity.type.directive';

@NgModule({
    declarations: [ForeachEntityTypeDirective],
    exports: [ForeachEntityTypeDirective],
})
export class MetaModule { }
