import { Component, OnInit } from '@angular/core';

import { GroupService } from '../services/group.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  group: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.group = this.groupService.getGroup();
  }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

}
