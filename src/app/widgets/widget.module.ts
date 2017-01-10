import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SimpleModule, SIMPLE_WIDGETS_DIRECTIVES } from './simple/simple.module';
import { MetaRouterModule } from './router/metarouter.module';

// TODO declare this dependency in just one file
import { EntityTypeRouterComponent } from './router/entitytype.router';
import { EntityTypeDetailsComponent } from './entitytype.details.component';

import { AbstractRuleService, EntityTypeRuleService, PropertyTypeRuleService, RuleService } from './rule.service';
import { WidgetService } from './widget.service';
import { MetaModule } from '../meta/meta.module';

@NgModule({
    imports: [
        SimpleModule,
        MetaRouterModule,
        MetaModule,
        RouterModule
    ],
    providers: [
        RuleService,
        AbstractRuleService,
        EntityTypeRuleService,
        PropertyTypeRuleService,
        WidgetService
    ],
    declarations: [
        EntityTypeDetailsComponent
    ],
    exports: [
        EntityTypeDetailsComponent
    ],
    entryComponents: [
        SIMPLE_WIDGETS_DIRECTIVES,
        EntityTypeRouterComponent,
        EntityTypeDetailsComponent
    ]
})
export class WidgetModule { }
