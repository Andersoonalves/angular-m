import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SimpleModule, SIMPLE_WIDGETS_DIRECTIVES } from './simple/simple.module';
import { MetaRouterModule } from './router/metarouter.module';

// TODO declare this dependency in just one file
import { EntityTypeRouterComponent } from './router/entitytype.router';
import { EntityTypeDetailsComponent } from './entitytype.details.component';
import { EntityShowComponent } from './entity.show.component';
import { CreateEntityTypeComponent } from './create.entitytype.component';

import { 
    AbstractRuleService, 
    EntityTypeRuleService, 
    PropertyTypeRuleService, 
    PropertyRuleService,
    RuleService 
} from './rule.service';

import { WidgetService } from './widget.service';
import { MetaModule } from '../meta/meta.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        SimpleModule,
        MetaRouterModule,
        MetaModule,
        RouterModule,
        PipesModule
    ],
    providers: [
        RuleService,
        AbstractRuleService,
        EntityTypeRuleService,
        PropertyTypeRuleService,
        PropertyRuleService,
        WidgetService
    ],
    declarations: [
        EntityTypeDetailsComponent,
        EntityShowComponent,
        CreateEntityTypeComponent
    ],
    exports: [
        EntityTypeDetailsComponent,
        EntityShowComponent,
        CreateEntityTypeComponent
    ],
    entryComponents: [
        SIMPLE_WIDGETS_DIRECTIVES
    ]
})
export class WidgetModule { }
