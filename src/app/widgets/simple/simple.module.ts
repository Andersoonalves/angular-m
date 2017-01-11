import { forwardRef } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlainTextComponent } from './plain';
import { BoldTextComponent } from './bold';
import { ThComponent } from './th';
import { FormLineComponent } from './form.line';

export const SIMPLE_WIDGETS_DIRECTIVES = [
  forwardRef(() => PlainTextComponent),
  forwardRef(() => BoldTextComponent),
  forwardRef(() => ThComponent),
  forwardRef(() => FormLineComponent)
];

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
export class SimpleModule { }
