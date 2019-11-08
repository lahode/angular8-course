import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { Group } from '../models/group';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnDestroy {

  @Input() group: Group;
  @Output() hideGroup = new EventEmitter<boolean>();

  constructor(private logService: LogService) { }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  leaveGroupDetail() {
    this.hideGroup.emit(true);
  }

  ngOnDestroy() {
    this.logService.addLog(new Date(Date.now()).toLocaleString() + ' - ' + this.group.name);
  }

}
