import { NgModule } from '@angular/core';

import { SimpleModule, SIMPLE_WIDGETS_DIRECTIVES } from './simple/simple.module';
import { MetaRouterModule } from './router/metarouter.module';

// TODO declare this dependency in just one file
import { EntityTypeRouterComponent } from './router/entitytype.router';

import { RuleService } from './rule.service';
import { WidgetService } from './widget.service';

@NgModule({
    imports: [
        SimpleModule,
        MetaRouterModule
    ],
    providers: [
        RuleService,
        WidgetService
    ],
    entryComponents: [
        SIMPLE_WIDGETS_DIRECTIVES,
        EntityTypeRouterComponent
    ]
})
export class WidgetModule { }
