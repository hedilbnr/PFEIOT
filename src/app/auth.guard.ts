import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;

    return this.checkUserLogin(next, url);
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: string): boolean {
    console.log(this.authService.isLoggedIn());
    console.log("rrrrrrrrrrrrr");

    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getRole();

      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['/admin-layout']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/admin-layout']);
    return false;
  }
}
