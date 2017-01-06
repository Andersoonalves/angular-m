import { forwardRef }   from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntityTypeRouterComponent } from './entitytype.router';

export const META_ROUTER_DIRECTIVES = [
  forwardRef(() => EntityTypeRouterComponent)
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule
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
