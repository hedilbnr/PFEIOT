import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { utilisateur } from '../../models/utilisateur.model';
import { id } from '@swimlane/ngx-charts';

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
  employeeForm: FormGroup;
 

  constructor(public dialogRef: MatDialogRef<EditEmplyeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private employeeService:EmployeeService) {
      {
        this.employeeForm = new FormGroup({
          email: new FormControl('', [Validators.email]),
          nom: new FormControl('', [Validators.required]),
          prenom: new FormControl('', [Validators.required]),
          dateNaiss: new FormControl('', [Validators.required])
        });
      }
     }

  // ngOnInit(): void {
  //   const user = this.data.user;
  //   console.log("user is " + user)
  //   console.log(" my id is " + user.id)
  //   this.email= new FormControl(user.email, [Validators.email])
  //   this.nom= new FormControl(user.nom, [Validators.required])
  //   this.prenom= new FormControl(user.prenom, [Validators.required])
  //   this.dateNaiss= new FormControl(user.dateNaiss, [Validators.required])
  // }
  ngOnInit(): void {
    const employee: Employee = this.data.employee;
    this.employeeForm.patchValue({
      email: employee.email,
      nom: employee.nom,
      prenom: employee.prenom,
      dateNaiss: employee.dateNaiss
    });
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
  // onSubmit(): void {
  //   let editedEmployee= this.createEmployee(this.employeeID);

  //   this.employeeService.editEmployee(this.employeeID, editedEmployee ).subscribe(()=>{
  //     console.log(" edited and done");
  //     this.dialogRef.close({ /* result data object here */ });
  //     location.reload();
  //   })
  // }

  // onCancel(): void {
  //   // Handle the cancel button click or perform any necessary actions

  //   // Close the dialog without passing any data back
  //   this.dialogRef.close();
  // }
  onSubmit(): void {
    if (this.employeeForm.valid) {
      const editUser: Employee = {
        id: this.data.employee.id,
        email: this.employeeForm.get('email').value,
        nom: this.employeeForm.get('nom').value,
        prenom: this.employeeForm.get('prenom').value,
        dateNaiss: this.employeeForm.get('dateNaiss').value,
        photo: '',
        pointages: [],
        demandeConges: undefined,
        mot_de_passe: '',
        role: undefined
      };

      this.employeeService.editUser(id, utilisateur).subscribe(() => {
        console.log('Employee updated successfully');
        this.dialogRef.close(editUser);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
