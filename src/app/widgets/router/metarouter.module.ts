import { forwardRef }   from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntityTypeRouterComponent } from './entitytype.router';
import { MetaModule } from '../../meta/meta.module';

export const META_ROUTER_DIRECTIVES = [
  forwardRef(() => EntityTypeRouterComponent)
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MetaModule
  ],
  declarations: [
      META_ROUTER_DIRECTIVES
  ],
  exports: [
      META_ROUTER_DIRECTIVES,
      CommonModule,
      FormsModule
  ]
})
export class MetaRouterModule {
  static forRoot() {
    return {
      ngModule: MetaRouterModule,
      providers: [ ]
    };
  }
}
