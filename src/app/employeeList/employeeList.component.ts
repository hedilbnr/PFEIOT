import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { AddEmplyeeDialogComponent } from '../components/add-emplyee-dialog/add-emplyee-dialog.component';
import { data } from 'jquery';
import { utilisateur } from '../models/utilisateur.model';
import { Router } from '@angular/router'
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { OpenPhotoModalComponent } from '../open-photo-modal/open-photo-modal.component';
import { EditEmplyeeComponent } from '../components/edit-emplyee/edit-emplyee.component';
import { ModifyUserDialogComponent } from '../components/modify-user-dialog/modify-user-dialog.component';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
})
export class EmployeeListComponent implements OnInit {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  time = new Date();
  rxTime = new Date();
  intervalId;
  users: any;
  matDialog: any;
 
  utilisateurs:any;
  dialogRef: any;
  constructor(private employeeService:EmployeeService, private dialog: MatDialog, private router:Router,
    private snackBar: MatSnackBar) { }
    isModalOpen = false;

    openModal1() {
      this.isModalOpen = true;
    }
  
    closeModal1() {
      this.isModalOpen = false;
    }
  onSubmit(utilisateur) {
    this.employeeService.addUser(utilisateur).subscribe(result => {
      this.dialogRef.close();
    });
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; 
    const dialogRef = this.dialog.open(OpenPhotoModalComponent, 
      {
      
      }
);
console.log("***" + data);

  }
 
  addEmplyee(){
    alert("hello")
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; 
    const dialogRef = this.dialog.open(AddEmplyeeDialogComponent, 
      {
        data:{
          message:this.utilisateurs
        }
      }
);
console.log("***" + data);

  }
  navigateToProfile(id:any){
    this.router.navigate(['employee-profile', id]);
  }
  EditUser(id: any){
 
  }
  openDialog1(userId: string) {
    const user = this.users.find(u => u.id === userId);

  // Ouvrir le dialogue avec les données de l'utilisateur à modifier
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '500px';
  dialogConfig.data = user;
    // Récupérez les informations de l'utilisateur en utilisant l'ID et affichez-les dans le dialogue
    dialogConfig.width = '500px';
    dialogConfig.data = userId;
  
    const dialogRef = this.dialog.open(ModifyUserDialogComponent, dialogConfig);
  }
  

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.getusers()
    

  }
  deleteUser(id: any){
    this.dialog.open(DeletedialogComponent, {
      disableClose: true,
      position: {
        top: "50px"
      },
      data:{
        titre: "Supprimer User",
        message: "vous ête sur de supprimer cet utilisateur?"
      },
    }).afterClosed().subscribe(
      result => {
        if (result){
          this.employeeService.deleteUser(id).subscribe(()=>{
            console.log("deleted");
            this.showSuccessMessage('utilisateur a été supprimé avec succès')
            this.getusers()
          })

        }
      }
    )
   
  }
  navigateToEdit(id:any){
    this.router.navigate(['EditEmployee', id])
  }

  showSuccessMessage(msg: string){
    this.config['panelClass']= 'success-message';
    this.snackBar.open(msg, '', this.config)
  }


  getusers(){
    this.employeeService.getusers()
    .subscribe(data=>{
      console.log("*".repeat(50),data)
      this.users=data
    },err=>{
      console.log(err)
    })
  }

}
function DialogBodyComponent(DialogBodyComponent: any, arg1: { width: string; }) {
  throw new Error('Function not implemented.');
}

