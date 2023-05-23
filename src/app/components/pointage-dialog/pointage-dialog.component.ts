import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PointageService } from '../../../services/pointage.service';

@Component({
  selector: 'app-pointage-dialog',
  templateUrl: './pointage-dialog.component.html',
  styleUrls: ['./pointage-dialog.component.css']
})
export class PointageDialogComponent implements OnInit {
  myArray:any[]
 allPointages: any[];
  user:any;
  userId: string;
  constructor(private pointageService:PointageService,@Inject(MAT_DIALOG_DATA) public data: any) { 
    //this.allPointages = data.message
    console.log("FRom Diaglog",data);
    this.userId=data.idUser
    
  }

  ngOnInit(): void {
    //this.userId=localStorage.getItem('IDUSER')
    this. getAllpointages()
  }
  getAllpointages(){
    this.pointageService.getALLpointages(this.userId)
    .subscribe(data=>{
      this.allPointages=data;
     
    },err=>{

      console.log(err)
    })
  }
  closeDialog() {
    // TODO: Implement close dialog logic
  }

  saveDialog() {
    // TODO: Implement save dialog logic
  }

}
