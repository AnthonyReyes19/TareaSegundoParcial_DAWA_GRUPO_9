import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }
}
