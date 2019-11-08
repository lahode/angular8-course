import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Group } from '../models/group';
import { LogService } from '../services/log.service';
import { GroupEditComponent } from '../group-edit/group-edit.component';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnDestroy {

  @Input() group: Group;
  @Output() hideGroup = new EventEmitter<boolean>();
  bsModalRef: BsModalRef;

  constructor(private logService: LogService,
              private modalService: BsModalService) { }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  leaveGroupDetail() {
    this.hideGroup.emit(true);
  }

  ngOnDestroy() {
    this.logService.addLog(new Date(Date.now()).toLocaleString() + ' - ' + this.group.name);
  }

  edit() {
    this.bsModalRef = this.modalService.show(GroupEditComponent);
    this.bsModalRef.content.group = this.group;
  }

}
