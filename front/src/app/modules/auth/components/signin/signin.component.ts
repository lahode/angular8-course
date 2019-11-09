import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signInform: FormGroup;

  constructor(private fb: FormBuilder,
              public bsModalRef: BsModalRef) {}

  ngOnInit() {
    // Initialize authenticate form.
    this.signInform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Sign in the user
  signIn() {
    console.log('Values: ', this.signInform.value);
    this.bsModalRef.hide();
  }
}
