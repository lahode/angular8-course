import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Group } from '../models/group';
import { LogService } from '../services/log.service';
import { GroupService } from '../services/group.service';
import { GroupEditComponent } from '../group-edit/group-edit.component';

const MAX_PER_PAGE = 6;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groupDetail: Group | null = null;
  logGroupSeen: string[] = [];
  groupCount: number = 0;
  maxPerPage: number = MAX_PER_PAGE;
  fromto: any = {from: 0, to: MAX_PER_PAGE - 1};
  bsModalRef: BsModalRef;

  constructor(private logService: LogService,
              private groupService: GroupService,
              private modalService: BsModalService) { }

  // Lance la récupération des groupes à la création du composant
  // Ajoute un observable permettant de mettre à jour les logs
  ngOnInit() {
    this.logService.getLogs().subscribe((logGroupSeen) => {
      this.logGroupSeen = logGroupSeen;
    });
    this.groupCount = this.groupService.getGroups().length;
  }

  // Modifie la tranche des groupes à afficher (Pagination)
  changeResult(fromTo: any) {
    this.fromto = fromTo;
  }

  new() {
    this.bsModalRef = this.modalService.show(GroupEditComponent);
  }
}
