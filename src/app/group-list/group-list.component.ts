import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GroupService } from '../services/group.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  groups: Group[];
  @Output() showGroup = new EventEmitter<Group>();

  InputgroupDetail

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groups = this.groupService.getGroups();
  }

  showGroupDetail(group: Group) {
    this.showGroup.emit(group);
  }
}
