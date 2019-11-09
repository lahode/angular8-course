import { Component, OnChanges, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { Group } from '../../models/group';
import { GroupService } from '../../services/group.service';
import { GroupEditComponent } from '../../components/group-edit/group-edit.component';

const MAX_PER_PAGE = 6;

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnChanges, OnInit {

  groups: Group[];
  groupDetail: Group | null = null;
  groupCount: number = 0;
  maxPerPage: number = MAX_PER_PAGE;
  fromto: any = {from: 0, to: MAX_PER_PAGE - 1};
  bsModalRef: BsModalRef;
  error: string = '';

  constructor(private groupService: GroupService,
              private modalService: BsModalService,
              private router: Router) { }

  // Lance la récupération des groupes à la création du composant
  ngOnInit() {
    this.getGroups();
  }

  ngOnChanges() {
    this.getGroups();
  }

  getGroups() {
    let from = this.fromto.from;
    let to = this.fromto.to;
    this.groupService.getGroupRange(from, to).subscribe((response) => {
      this.groups = response.groups;
      this.groupCount = response.total;
    }, error => {
      this.error = error;
    });
  }

  showGroupDetail(groupID: number) {
    this.router.navigate(['/groups/view/' + groupID]);
  }

  // Modifie la tranche des groupes à afficher (Pagination)
  changeResult(fromTo: any) {
    this.fromto = fromTo;
  }

  new() {
    this.bsModalRef = this.modalService.show(GroupEditComponent);
  }
}
