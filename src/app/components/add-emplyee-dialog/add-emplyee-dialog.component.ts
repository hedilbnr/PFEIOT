import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PointageService } from '../../../services/pointage.service';
import { EmployeeService } from '../../../services/employee.service';

interface Role {
  id:number
  value: string;
}

@Component({
  selector: 'app-add-emplyee-dialog',
  templateUrl: './add-emplyee-dialog.component.html',
  styleUrls: ['./add-emplyee-dialog.component.css']
})
export class AddEmplyeeDialogComponent implements OnInit {
  user: any;
  userForm = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    nom: new FormControl(null, [Validators.required]),
    prenom: new FormControl(null, [Validators.required]),
    mot_de_passe:new FormControl(null,[Validators.required]),

    dateNaiss: new FormControl(null, []),
    role: new FormControl(null, [Validators.required]),


  });

  roles: Role[] = [
    {    id:152, value: 'Administrateur' },
    {     id:152,value: 'Employé' }

  ];
  subject: any;
  fileInput: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private pointageService:PointageService  ,private employeeService:EmployeeService,private dialogRef: MatDialog) {
    this.user = data.message
  }
  
  onClick() {
    const subjectValue = this.userForm.controls['subject'].value;
    const fileValue = this.userForm.controls['file'].value;

    this.pointageService.postImage(this.subject, this.file).subscribe(
      (response) => {
        // Traitement réussi
        console.log(response);
      },
      (error) => {
        // Gestion des erreurs
        console.error(error);
      }
    );
  }
  file(subject: any, file: any) {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
  console.log(this.userForm);
 let dataToSend={
   email:this.userForm.value.email,
   nom:this.userForm.value.nom,
   prenom:this.userForm.value.prenom,
   mot_de_passe:this.userForm.value.mot_de_passe,
   role:{
     id:152
   }
 }
    this.employeeService.addUser(this.userForm.value).subscribe(data=>{
   
        console.log("user created");
        this.dialogRef.closeAll();
        

   
    },err=>{
        console.log('user not created',err)
    })

  }
  utilisateur(utilisateur: any) {
    throw new Error('Method not implemented.');
  }



  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  closeDialog() {

    // TODO: Implement close dialog logic
    this.dialogRef.closeAll();  // Ferme le dialog

  }

  saveDialog() {
    // TODO: Implement save dialog logic
  }
  ngOnInit(): void {
  }

}
