import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

import { SigninComponent } from '../../modules/auth/components/signin/signin.component';
import { AuthService } from '../../modules/auth/services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;
  bsModalRef: BsModalRef;
  user$: Observable<User>;

  constructor(private modalService: BsModalService,
              private auth: AuthService) {}

  ngOnInit() {
    this.user$ = this.auth.user$;
  }

  showConnectModal() {
    this.bsModalRef = this.modalService.show(SigninComponent);
  }

  logout() {
    this.auth.logout();
  }

}
