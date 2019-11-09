import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { User } from '../../../../models/user';

import { BsModalRef } from 'ngx-bootstrap/modal';

const options = ['Tout le monde a accès au groupe',
                 'Seul les membres du groupe peuvent y avoir accès'];

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}

  group: Group;
  user: User;
  accessOptions: string[] = [];

  ngOnInit() {
    this.accessOptions = options;
    if (!this.group) {
      this.user = <User>{_id: '1', username: 'soloh', firstname: 'Han', lastname: 'Solo'};
      this.group = <Group>{_id:'', name: '', access: 0, pub: false, owner: this.user, description: '', url: ''};
    }
  }

  changeUrl(event: any) {
    this.group.url = event.target.value;
  }

  changeVisibility(visibility: boolean) {
    this.group.pub = visibility;
  }

  cancel() {
    this.bsModalRef.hide();
  }

  save() {
    this.bsModalRef.hide();
  }
}
