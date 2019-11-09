import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { User } from '../../../../models/user';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { GroupService } from '../../services/group.service';

const options = ['Tout le monde a accès au groupe',
                 'Seul les membres du groupe peuvent y avoir accès'];

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef,
              private groupService: GroupService) {}

  group: Group;
  error: string = '';
  accessOptions: string[] = [];

  ngOnInit() {
    this.accessOptions = options;
    if (!this.group) {
      this.group = <Group>{_id: undefined, name: '', access: 0, pub: false, owner: null, description: '', url: ''};
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
    this.group.owner = this.group.owner['_id'];
    this.groupService.save(this.group).subscribe((e) => {
      this.bsModalRef.hide();
    }, error => {
      this.error = error;
    });
  }
}
