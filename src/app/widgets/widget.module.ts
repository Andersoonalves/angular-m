import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SimpleModule, SIMPLE_WIDGETS_DIRECTIVES } from './simple/simple.module';

// TODO declare this dependency in just one file
import { ListEntitiesComponent } from './list.entities.component';
import { ShowEntityComponent } from './show.entity.component';
import { CreateEntityComponent } from './create.entity.component';
import { EditEntityComponent } from './edit.entity.component';


import { MetaModule } from '../meta/meta.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        SimpleModule,
        MetaModule,
        RouterModule,
        PipesModule
    ],
    providers: [],
    declarations: [
        ListEntitiesComponent,
        ShowEntityComponent,
        CreateEntityComponent,
        EditEntityComponent
    ],
    exports: [
        ListEntitiesComponent,
        ShowEntityComponent,
        CreateEntityComponent,
        EditEntityComponent
    ],
    entryComponents: [
        SIMPLE_WIDGETS_DIRECTIVES
    ]
})
export class WidgetModule { }
