import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { SigninComponent } from '../../modules/auth/components/signin/signin.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  showConnectModal() {
    this.bsModalRef = this.modalService.show(SigninComponent);
  }

}
