import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CongeService } from '../../../../services/conge.service';

@Component({
  selector: 'app-congedialog',
  templateUrl: './congedialog.component.html',
  styleUrls: ['./congedialog.component.css']
})
export class CongedialogComponent implements OnInit {

  congeForm = new FormGroup({
    type: new FormControl(null, [Validators.required]),
    dateDebut: new FormControl(null, [Validators.required]),
    dateFin: new FormControl(null, [Validators.required]),
  });
  conge: any;

  constructor(
    private congeService: CongeService,
    public dialogRef: MatDialogRef<CongedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  {this.conge = data.message}

  ngOnInit(): void {}

  onSubmit() {
     const id = this.data.id;
    let dataToSend={
      type:this.congeForm.value.type,
      dateDebut:this.congeForm.value.dateDebut,
      dateFin:this.congeForm.value.dateFin
    }
    // const id = this.data.id;
    // console.log('Employee ID: '+ this.data.employeeId);
     console.log('+++++++++++ dateDebut : '+ dataToSend['dateDebut']);
     console.log('+++++++++++ dateFin : '+ dataToSend['dateFin']);
     
    this.congeService.addConge(dataToSend, this.data.employeeId).subscribe(
      (response) => {
        console.log('Congé ajouté avec succès', response);
        // Close the dialog or perform any other necessary actions
        console.log(" i go t conge " + JSON.stringify(dataToSend));
        this.dialogRef.close();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du congé', error);
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
function congeData(congeData: any, employeeId: any) {
  throw new Error('Function not implemented.');
}

function employeeId(congeData: (congeData: any, employeeId: any) => void, employeeId: any) {
  throw new Error('Function not implemented.');
}