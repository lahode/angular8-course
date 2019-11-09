import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SigninComponent
  ],
  entryComponents: [
    SigninComponent
  ]
})
export class AuthModule { }
