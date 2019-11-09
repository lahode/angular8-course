import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    return this.authService.checkAuth()
    .pipe(
      map(() => {
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }

}
