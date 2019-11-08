import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GroupService } from '../services/group.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnChanges {

  groups: Group[];
  @Input() fromto: any;

  constructor(private groupService: GroupService,
              private router: Router) { }

  ngOnChanges() {
    this.getGroups();
  }

  getGroups() {
    this.groups = this.groupService.getGroupRange(this.fromto.from, this.fromto.to);
  }

  showGroupDetail(groupID: number) {
    this.router.navigate(['/view/' + groupID]);
  }
}
