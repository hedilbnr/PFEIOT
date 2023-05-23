import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, tap, throwError } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;
 
  nom= new FormControl()
  prenom=new FormControl()
  email= new FormControl()
  dateNaiss = new FormControl();
  userId: number = 0;
  demaneConges: string;
  photo: string;
  mot_de_passe: string;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    if(this.userId> 0){
      console.log("yes greater than 0")
      this.loadUser(this.userId)
    }
  }
  loadUser(userID: number){
    this.employeeService.getEmployeeByID(userID).pipe(
      tap((data) =>{
        this.nom.setValue(data.nom);
        this.prenom.setValue(data.prenom);
        this.email.setValue(data.email);
       

      }),
      catchError((error: any) => {return throwError(error)})
    ).subscribe();

  }
  navigateToEmployeeList(){
    this.router.navigate(['employeeList']);

  }
  saveUser(){
    let employee = this.createUser(this.userId)
    this.employeeService.editUser(this.userId, employee).subscribe(
      ()=>{
        console.log("done")
      }
    )

  }
  createUser(userID: number) :Employee{
    return new Employee(
      userID,
      this.nom.value,
      this.prenom.value,
      this.email.value,
      this.mot_de_passe,
      this.dateNaiss.value,
      this.photo,
      this.demaneConges,
     
    )
  }

}
