import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleModule, SIMPLE_WIDGETS_DIRECTIVES } from './simple/simple.module';


import { MetaModule } from '../meta/meta.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SimpleModule,
        MetaModule,
        PipesModule
    ],
    entryComponents: [
        SIMPLE_WIDGETS_DIRECTIVES
    ], 
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SimpleModule,
        MetaModule,
        PipesModule        
    ]
})
export class WidgetModule { }
