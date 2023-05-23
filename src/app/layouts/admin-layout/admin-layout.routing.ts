import { Routes } from '@angular/router';

import { EmployeeProfileComponent } from '../../employee-profile/employee-profile.component';
import { EmployeeListComponent } from '../../employeeList/employeeList.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { StatisticsComponent } from '../../statistics/statistics.component';
import { EditComponent } from '../../edit/edit.component';
import { AuthGuard } from './../../auth.guard';
import { EditEmplyeeComponent } from '../../components/edit-emplyee/edit-emplyee.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard],data:{role:'administrateur'} },
    { path: 'employee-profile/:id',   component: EmployeeProfileComponent,canActivate: [AuthGuard], data: { expectedRole: ['employé','administrateur'] }},
    { path: 'employeeList',     component: EmployeeListComponent,canActivate: [AuthGuard],data:{role:'administrateur'}},
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'calendar',        component: CalendarComponent ,canActivate: [AuthGuard], data: { expectedRole:'employee'  }},
    { path: 'statistics',        component: StatisticsComponent ,canActivate: [AuthGuard],data:{role:'administrateur'} },
     {path:'EditEmployee' , component:EditEmplyeeComponent},
    
   /*  { path: 'dashboard', component: DashboardComponent ,
    canActivate: [AuthGuard],data:{role:'admin'},*/
    
  


   
];
