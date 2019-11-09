import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  public signInform: FormGroup;
  public error: string;
  private signInFormSubscription: Subscription;

  constructor(private fb: FormBuilder,
              public bsModalRef: BsModalRef,
              private auth: AuthService) {}

  ngOnInit() {
    // Initialize authenticate form.
    this.signInform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Sign in the user
  signIn() {
    this.signInFormSubscription = this.auth.login(this.signInform.value).subscribe(u => {
      this.bsModalRef.hide();
    }, error => this.error = error);
  }

  ngOnDestroy(): void {
    if(this.signInFormSubscription) {
      this.signInFormSubscription.unsubscribe();
    }
  }
}
