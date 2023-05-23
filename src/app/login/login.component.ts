import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',


  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  error: string = '';
  login: any;

  constructor(private fb: FormBuilder, private router: Router,private authService:AuthService,private loginService:LoginService, private employeeService:EmployeeService) { }
 
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }
  // getLogin(){
  //   this.loginService.getLogin(this.email, this.password)
  //   .subscribe(data=>{
  //     console.log("*".repeat(50),data)
  //     this.login=data
  //     localStorage.setItem('STATE', 'true');
  //     localStorage.setItem('ROLE', 'admin');
  //     localStorage.setItem('IDUSER',this.login.id);
  //     if (this.authService.isLoggedIn()) {
  //       const userRole = this.authService.getRole();
        
  //       switch (userRole) {
  //         case 'admin':
  //           this.router.navigate(['/dashboard']);
  //           break;
  //         case 'employé':
  //           this.router.navigate(['/employee-profile']);
  //           break;
  //         default:
  //           this.router.navigate(['/login']);
  //           break;
  //       }
  //     }
  //   },err=>{
  //     console.log(err)
  //   })
  // }
  // getLogin() {
  //   this.loginService.getLogin(this.email, this.password).subscribe(
  //     (data) => {
  //       console.log("*".repeat(50), data);
  //       this.login = data;
  
  //       if (this.login && this.login.role) {
  //         this.authService.login(this.login.role, { id: this.login.id });
  //         this.onSubmit(); // Redirect based on the user's role
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  getLogin() {
    this.loginService.getLogin(this.email, this.password)
      .subscribe(
        (data: any) => {
          console.log("*".repeat(50), data);
          this.login = data;
  
          // Save user state and role to local storage
          localStorage.setItem('STATE', 'true');
          localStorage.setItem('ROLE', this.login.role);
          localStorage.setItem('IDUSER', this.login.id);
         
          // Redirect based on the user's role
          this.redirectBasedOnRole(this.login.role);
        },
        (error: any) => {
          console.log(error);
          this.error = 'Error occurred during login. Please try again.';
        }
      );
  }
  
  private redirectBasedOnRole(role: string) {
    switch (role) {
      case 'administrateur':
        this.router.navigate(['/dashboard']);
        this.router.navigate(['employee-profile/myProfile']);
        this.router.navigate(['/employeeList'])
        break;
      case 'employé':
        // this.router.navigate(['employee-profile/myProfile']);
        this.router.navigate(['/calendar']);
        this.router.navigate(['employee-profile/myProfile']);


        
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }
  
  


  onSubmit() {
    // Vérifiez les informations d'identification de l'utilisateur ici
    // Si la connexion est réussie, naviguez vers le tableau de bord
    
    // Example logic to redirect based on user role
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getRole();
      
      switch (userRole) {
        case 'administrateur':
          this.router.navigate(['/dashboard']);
          break;
        case 'employé':
          this.router.navigate(['/employee-profile']);
          break;
        default:
          this.router.navigate(['/login']);
          break;
      }
    }
  }
  
  loginRole() {
    this.authService.login('admin', { id: 103 }); // Assuming 'admin' is the role for the user
    this.onSubmit(); // Redirect based on the user's role
  }
}  

