import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEmplyeeDialogComponent } from './components/add-emplyee-dialog/add-emplyee-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {  MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import {MatCardModule} from '@angular/material/card';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import { EditComponent } from './edit/edit.component';
import { OpenPhotoModalComponent } from './open-photo-modal/open-photo-modal.component'; 
import { CongedialogComponent } from './components/dialogs/congedialog/congedialog.component';
import { EditEmplyeeComponent } from './components/edit-emplyee/edit-emplyee.component';
import { ModifyUserDialogComponent } from './components/modify-user-dialog/modify-user-dialog.component';








@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    MatCardModule,
    
    
    
   
  
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AddEmplyeeDialogComponent,
    FaceRecognitionComponent,
    DeletedialogComponent,
    EditComponent,
    OpenPhotoModalComponent,
    CongedialogComponent,
    EditEmplyeeComponent,
    ModifyUserDialogComponent
    
    
    
    
    
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
