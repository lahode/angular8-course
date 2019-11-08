import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

import { Group } from '../models/group';
import { LogService } from '../services/log.service';
import { GroupService } from '../services/group.service';
import { GroupEditComponent } from '../group-edit/group-edit.component';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit, OnDestroy {

  group: Group;
  bsModalRef: BsModalRef;

  constructor(private logService: LogService,
              private modalService: BsModalService,
              private groupService: GroupService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.group = this.groupService.getGroup(params['id']);
    });
  }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  leaveGroupDetail() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.logService.addLog(new Date(Date.now()).toLocaleString() + ' - ' + this.group.name);
  }

  edit() {
    this.bsModalRef = this.modalService.show(GroupEditComponent);
    this.bsModalRef.content.group = this.group;
  }

}
