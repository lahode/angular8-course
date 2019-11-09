import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagerComponent } from './components/pager/pager.component';
import { SwitchInputComponent } from './components/switch-input/switch-input.component';

@NgModule({
  declarations: [
    PagerComponent,
    SwitchInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PagerComponent,
    SwitchInputComponent
  ]
})
export class SharedModule { }