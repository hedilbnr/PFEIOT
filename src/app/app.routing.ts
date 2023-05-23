import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  /*{ path: 'dashboard', component: DashboardComponent ,
    canActivate: [AuthGuard],data:{role:'admin'},
    
  },*/
  
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       //useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
