import { forwardRef }   from '@angular/core';
import { PlainTextComponent } from './plain';
import { BoldTextComponent }   from './bold';

export const SIMPLE_WIDGETS_DIRECTIVES = [
  forwardRef(() => PlainTextComponent),
  forwardRef(() => BoldTextComponent)
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [
      SIMPLE_WIDGETS_DIRECTIVES
  ],
  exports: [
      SIMPLE_WIDGETS_DIRECTIVES,
      CommonModule,
      FormsModule
  ]
})
export class SimpleModule {
  static forRoot() {
    return {
      ngModule: SimpleModule,
      providers: [ ]
    };
  }
}
