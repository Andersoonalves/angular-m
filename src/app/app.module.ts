import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MetaModule, META_DIRECTIVES } from './meta/meta.module';
import { WidgetModule } from './widgets/widget.module';
import { AppRoutingModule } from './app-routing.module';
import { MetaRouterModule } from './widgets/router/metarouter.module';
import { DomainModule } from './domain/domain.module';

import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MetaModule,
    WidgetModule,
    DomainModule,
    MetaRouterModule,
    AppRoutingModule,
    PipesModule
  ],
  providers: [],
  exports: [PipesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
