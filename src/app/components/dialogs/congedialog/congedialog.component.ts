import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CongeService } from '../../../../services/conge.service';

@Component({
  selector: 'app-congedialog',
  templateUrl: './congedialog.component.html',
  styleUrls: ['./congedialog.component.css']
})
export class CongedialogComponent implements OnInit {
  showEmptyFieldError = false;

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

  ngOnInit(): void {
    this.congeForm.setValidators(this.dateFinSupDateDebutValidator());
  }
  dateFinSupDateDebutValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const dateDebut = control.get('dateDebut')?.value;
      const dateFin = control.get('dateFin')?.value;

      if (dateDebut && dateFin && dateFin < dateDebut) {
        return { 'dateFinInfDateDebut': true };
      }

      return null;
    };
  }

  // onSubmit() {
  //    const id = this.data.id;
  //   let dataToSend={
  //     type:this.congeForm.value.type,
  //     dateDebut:this.congeForm.value.dateDebut,
  //     dateFin:this.congeForm.value.dateFin
  //   }
  //   // const id = this.data.id;
  //   // console.log('Employee ID: '+ this.data.employeeId);
  //    console.log('+++++++++++ dateDebut : '+ dataToSend['dateDebut']);
  //    console.log('+++++++++++ dateFin : '+ dataToSend['dateFin']);
     
  //   this.congeService.addConge(dataToSend, this.data.employeeId).subscribe(
  //     (response) => {
  //       console.log('Congé ajouté avec succès', response);
  //       // Close the dialog or perform any other necessary actions
  //       console.log(" i go t conge " + JSON.stringify(dataToSend));
  //       this.dialogRef.close();
  //     },
  //     (error) => {
  //       console.error('Erreur lors de l\'ajout du congé', error);
  //     }
  //   );
  // }
  onSubmit() {
    if (this.congeForm.invalid) {
      this.showEmptyFieldError = true;
      return;
    }
    const id = this.data.id;
    let dataToSend = {
      type: this.congeForm.value.type,
      dateDebut: this.congeForm.value.dateDebut,
      dateFin: this.congeForm.value.dateFin
    };
  
    // Vérifier si l'un des champs est vide
    if (this.congeForm.invalid) {
      return; // Arrêter la soumission si la validation échoue
    }
  
    console.log('+++++++++++ dateDebut : ' + dataToSend['dateDebut']);
    console.log('+++++++++++ dateFin : ' + dataToSend['dateFin']);
  
    this.congeService.addConge(dataToSend, this.data.employeeId).subscribe(
      (response) => {
        console.log('Congé ajouté avec succès', response);
        // Fermer le dialogue ou effectuer d'autres actions nécessaires
        console.log("J'ai obtenu le congé: " + JSON.stringify(dataToSend));
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