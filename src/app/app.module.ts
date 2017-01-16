import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlashMessageComponent } from './widgets/flash.message.component';
import { MetaModule } from './meta/meta.module';
import { WidgetModule } from './widgets/widget.module';
import { AppRoutingModule } from './app-routing.module';
import { MetaRouterModule } from './widgets/router/metarouter.module';
import { DomainModule } from './domain/domain.module';

import { PipesModule } from './pipes/pipes.module';
import { FlashMessageService } from './widgets/flash.message.service';

@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent
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
  providers: [FlashMessageService],
  exports: [
    PipesModule,
    FlashMessageComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
