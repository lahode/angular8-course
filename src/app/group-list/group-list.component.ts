import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';

import { GroupService } from '../services/group.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnChanges {

  groups: Group[];
  @Output() showGroup = new EventEmitter<Group>();
  @Input() fromto: any;

  constructor(private groupService: GroupService) { }

  ngOnChanges() {
    this.getGroups();
  }

  getGroups() {
    this.groups = this.groupService.getGroupRange(this.fromto.from, this.fromto.to);
  }

  showGroupDetail(group: Group) {
    this.showGroup.emit(group);
  }
}
