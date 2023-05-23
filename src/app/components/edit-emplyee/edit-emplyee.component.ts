import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'app-edit-emplyee',
  templateUrl: './edit-emplyee.component.html',
  styleUrls: ['./edit-emplyee.component.css']
})
export class EditEmplyeeComponent implements OnInit {
    email: FormControl
    nom: FormControl

    prenom: FormControl
    dateNaiss: FormControl
    employeeID: number;
 

  constructor(public dialogRef: MatDialogRef<EditEmplyeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    const user = this.data.user;
    console.log("user is " + user)
    console.log(" my id is " + user.id)
    this.email= new FormControl(user.email, [Validators.email])
    this.nom= new FormControl(user.nom, [Validators.required])
    this.prenom= new FormControl(user.prenom, [Validators.required])
    this.dateNaiss= new FormControl(user.dateNaiss, [Validators.required])
  }
  createEmployee(id:number):utilisateur{
    return new utilisateur(
      id,
      this.nom.value,
      this.prenom.value,
      this.email.value,
      this.data.user.motDePasse.value,
      this.dateNaiss.value,
      null,
      this.data.user.pointages.value,
      this.data.user.demandeConges,
      this.data.user.role,
      null
      )
  }
  onSubmit(): void {
    let editedEmployee= this.createEmployee(this.employeeID);

    this.employeeService.editEmployee(this.employeeID, editedEmployee ).subscribe(()=>{
      console.log(" edited and done");
      this.dialogRef.close({ /* result data object here */ });
      location.reload();
    })
  }

  onCancel(): void {
    // Handle the cancel button click or perform any necessary actions

    // Close the dialog without passing any data back
    this.dialogRef.close();
  }

}
