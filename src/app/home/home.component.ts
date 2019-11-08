import { Component, OnInit } from '@angular/core';

import { Group } from '../models/group';
import { LogService } from '../services/log.service';
import { GroupService } from '../services/group.service';

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

  constructor(private logService: LogService,
              private groupService: GroupService) { }

  // Lance la récupération des groupes à la création du composant
  // Ajoute un observable permettant de mettre à jour les logs
  ngOnInit() {
    this.logService.getLogs().subscribe((logGroupSeen) => {
      this.logGroupSeen = logGroupSeen;
    });
    this.groupCount = this.groupService.getGroups().length;
  }

  // Affiche le composant "Détail d'un groupe"
  showGroup(group: Group) {
    this.groupDetail = group;
  }

  // Affiche le composant "Liste des groupes"
  hideGroup() {
    this.groupDetail = null;
  }

  // Modifie la tranche des groupes à afficher (Pagination)
  changeResult(fromTo: any) {
    this.fromto = fromTo;
  }
}
