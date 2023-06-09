import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EmployeeProfileComponent} from '../../employee-profile/employee-profile.component';
import { EmployeeListComponent } from '../../employeeList/employeeList.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from '../../calendar/calendar.component';
import { StatisticsComponent } from '../../statistics/statistics.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxChartsModule, 
    FullCalendarModule,
    MatCardModule,
    MatSnackBarModule
    
  ],
  declarations: [
    DashboardComponent,
    EmployeeProfileComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CalendarComponent,
    StatisticsComponent,
    EmployeeListComponent,
   
    


    
    
  ]
})

export class AdminLayoutModule {}
