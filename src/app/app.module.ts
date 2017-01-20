import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularMService } from './angular.m.service';
import { FlashMessageComponent } from './widgets/flash.message.component';
import { MetaModule } from './meta/meta.module';
import { WidgetModule } from './widgets/widget.module';
import { AppRoutingModule } from './app-routing.module';

import { PipesModule } from './pipes/pipes.module';
import { FlashMessageService } from './widgets/flash.message.service';

@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent
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
    FlashMessageService,
    AngularMService
  ],
  exports: [
    CommonModule,
    FormsModule,
    PipesModule,
    FlashMessageComponent
  ],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
