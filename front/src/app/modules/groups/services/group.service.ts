import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  // Get single group
  public getGroup(groupID: string) : Observable<any> {
    return this.http.get(environment.endpoint + '/api/groups/get/' + groupID)
    .pipe(
      catchError(error => {throw error.error && error.error.message ? error.error.message : 'Erreur de connexion au serveur'})
    );
  }

  // Retourne la tranche des groupes à afficher pour l'affichage
  public getGroupRange(from, to) : Observable<any> {
    return this.http.get(environment.endpoint + '/api/groups/all/' + from + '/' + to)
      .pipe(
        catchError(error => {throw error.error && error.error.message ? error.error.message : 'Erreur de connexion au serveur'})
      );
  }

  // Save a group
  public save(group: Group) : Observable<any> {
    return this.http.post(environment.endpoint + '/api/groups/save', group)
      .pipe(
        catchError(error => {throw error.error && error.error.message ? error.error.message : 'Erreur de connexion au serveur'})
      );
  }

}