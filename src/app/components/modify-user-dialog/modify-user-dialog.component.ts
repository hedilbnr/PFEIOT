import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-modify-user-dialog',
  templateUrl: './modify-user-dialog.component.html',
  styleUrls: ['./modify-user-dialog.component.css']
})
export class ModifyUserDialogComponent implements OnInit {
  user: any = {};

  constructor(
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<ModifyUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = { ...data };
  }

  ngOnInit(): void {}

  onSubmit() {
    // Enregistrer les modifications et fermer le dialogue avec les données modifiées
    this.employeeService.editEmployee(this.user.id, this.user).subscribe(() => {
      this.dialogRef.close(this.user);
    });
  }

  closeDialog() {
    // Fermer le dialogue sans enregistrer les modifications
    this.dialogRef.close();
  }
}
