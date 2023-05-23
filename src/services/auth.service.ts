import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUserSubject(): string {
    throw new Error('Method not implemented.');
  }
  isLogin = false;
  userRole: string;

  constructor(private router: Router) {}

  login(role: string, user: any) {
    this.isLogin = true;
    this.userRole = role;
    this.redirectBasedOnRole();
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('USER', 'true');
    localStorage.setItem('ROLE', this.userRole);
    return of({ success: this.isLogin, role: this.userRole });
  }
  // logout() {
  //   // Clear user session, remove stored tokens or data, etc.
  //   localStorage.removeItem('STATE');
  //   localStorage.removeItem('ROLE');
  //   localStorage.removeItem('IDUSER');
  //   // Perform any additional logout actions if needed
  // }
  

  private redirectBasedOnRole() {
    switch (this.userRole) {
      case 'administrateur':
        this.router.navigate(['/dashboard']); // Redirect to the admin page
        break;
      case 'employé':
        this.router.navigate(['/employee-profile']); 
        this.router.navigate(['/calendar']); // Redirect to the employee page

        // Redirect to the employee page
        break;
      default:
        this.router.navigate(['/']); // Redirect to the default home page
        break;
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isLogin;
  }

  // Use this method to get the user's role
  getUserRole(): string | null {
    return this.userRole;
  }

  logout() {
    this.isLogin = false;
    this.userRole = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    this.isLogin = loggedIn === 'true';
    return this.isLogin;
  }

  getRole() {
    this.userRole = localStorage.getItem('ROLE');
    return this.userRole;
  }
}
