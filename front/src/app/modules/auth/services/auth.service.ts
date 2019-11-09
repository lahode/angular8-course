import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUser = new BehaviorSubject(null);
  public user$: Observable<User> = this.authUser.asObservable();

  constructor(private http: HttpClient) {}
  
  // Login
  public login(credentials) : Observable<any> {
    return this.http.post(environment.endpoint + '/login', credentials)
      .pipe(
        map((response:any) => {
          this.authUser.next(response.user);
          localStorage.setItem('token', response.token);
        }),
        catchError(error => {
          throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'
        })
      );
  }

  // Log out
  public logout() : void {
    this.authUser.next(null);
    localStorage.removeItem('token');
  }

}