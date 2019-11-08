import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { Group } from '../models/group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnDestroy {

  @Input() group: Group;
  @Output() hideGroup = new EventEmitter<boolean>();

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  leaveGroupDetail() {
    this.hideGroup.emit(true);
  }

  ngOnDestroy() {
    alert("Je reviens à l'accueil");
  }

}
