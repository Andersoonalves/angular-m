import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MetaModule } from './meta/meta.module';
import { AppRoutingModule } from './app-routing.module';
import { MetaRouterModule } from './widgets/router/metarouter.module';
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MetaModule,
    DomainModule,
    MetaRouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
