import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularMService } from './angular.m.service';
import { MetaModule } from './meta/meta.module';
import { WidgetModule } from './widgets/widget.module';
import { AppRoutingModule } from './widgets/router/app-routing.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    HttpModule,
    MetaModule,
    AppRoutingModule,
    PipesModule,
    WidgetModule
  ],
  providers: [
    AngularMService
  ],
  exports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
