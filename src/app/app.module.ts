import { EntityTypeComponent } from './meta/entitytype.component';
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
import { EntityTypeRouterComponent } from './entitytype.router';

@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent,
    EntityTypeRouterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MetaModule,
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
    EntityTypeRouterComponent,
    PipesModule,
    FlashMessageComponent
  ],
  schemas: [
    EntityTypeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
