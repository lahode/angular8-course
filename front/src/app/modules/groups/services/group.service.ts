import { Injectable } from '@angular/core';

import { User } from '../../../models/user';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  // Get all groups
  public getGroups(): Group[] {

    const user1 = <User>{_id: '1', username: 'soloh', firstname: 'Han', lastname: 'Solo'};
    const user2 = <User>{_id: '2', username: 'doj', firstname: 'Jon', lastname: 'Do'};
    const user3 = <User>{_id: '3', username: 'emmanuelh', firstname: 'Henri', lastname: 'Emmanuel'};

    const groups = [
      <Group>{_id:'G11113', name: 'Groupe 1', access: 0, pub: false, owner: user2, description: 'Direction', url: '', members:[user1]},
      <Group>{_id:'G11114', name: 'Groupe 2', access: 0, pub: false, owner: user2, description: 'Analystes', url: '', members:[user1, user3]},
      <Group>{_id:'G11115', name: 'Groupe 3', access: 0, pub: false, owner: user2, description: 'Experts', url: '', members:[user1]},
      <Group>{_id:'G11116', name: 'Groupe 4', access: 1, pub: false, owner: user2, description: 'Gestion de projet', url: '', members:[user2, user3]},
      <Group>{_id:'G11117', name: 'Groupe 5', access: 0, pub: false, owner: user2, description: 'Développement', url: '', members:[user2, user3]},
      <Group>{_id:'G11118', name: 'Groupe 6', access: 0, pub: false, owner: user2, description: 'Divers', url: '', members:[user2]},
      <Group>{_id:'G11119', name: 'Groupe 7', access: 0, pub: false, owner: user3, description: '', url: '', members:[user1, user2]},
      <Group>{_id:'G11120', name: 'Groupe 8', access: 1, pub: false, owner: user1, description: '', url: '', members:[user2, user3]},
      <Group>{_id:'G11121', name: 'Groupe 9', access: 0, pub: false, owner: user1, description: '', url: '', members:[user3]},
    ];

    return groups;
  }

  // Get single group
  public getGroup(id: number) {
    return this.getGroups()[id];
  }

  // Retourne la tranche des groupes à afficher pour l'affichage
  public getGroupRange(from, to) {
    const allGroups = this.getGroups();
    let groups = [];
    for (let i = from; i <= to; i++) {
      if (i < allGroups.length) {
        groups.push(allGroups[i]);
      }
    }
    return groups;
  }
}
