import { NgModule } from '@angular/core';

import { SimpleModule, SIMPLE_WIDGETS_DIRECTIVES } from '../widgets/simple/simple.module';
import { MetaRouterModule } from '../widgets/router/metarouter.module';
// TODO declare this dependency in just one file
import { EntityTypeRouterComponent } from '../widgets/router/entitytype.router';

// detail stuff
import { ForeachEntityTypeDirective } from './foreach.entity.type.directive';
import { MetadataService } from './metadata.service';

@NgModule({
    imports: [
        SimpleModule,
        MetaRouterModule
    ],
    declarations: [ForeachEntityTypeDirective],
    exports: [ForeachEntityTypeDirective],
    providers: [
        MetadataService
    ],
    entryComponents: [
        SIMPLE_WIDGETS_DIRECTIVES,
        EntityTypeRouterComponent
    ]
})
export class MetaModule { }
