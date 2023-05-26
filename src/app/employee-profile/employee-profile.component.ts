import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PointageService } from '../../services/pointage.service';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee.model';
import { Pointage } from '../models/pointage.model';
import { MatDialog } from '@angular/material/dialog';
import { CongedialogComponent } from '../components/dialogs/congedialog/congedialog.component';
import { AddEmplyeeDialogComponent } from '../components/add-emplyee-dialog/add-emplyee-dialog.component';
import { HttpHeaders } from '@angular/common/http';
import { CongeService } from '../../services/conge.service';
import { Conge } from '../models/congee.model';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { EditEmplyeeComponent } from '../components/edit-emplyee/edit-emplyee.component';
import { AuthService } from '../../services/auth.service';
import { ComprefaceService } from '../../services/compreface.service';
import { Role } from '../models/role.model';




@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  photoUrl: string;
  userSubject: string;
  congéAjouté: any;
  conge: Conge ;
  role:string;
  userRole: string;

  onCongéAjouté(congé: any) {
   
    this.congéAjouté = congé
  }
  openCongeDialog(id:number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };

    const dialogRef = this.dialog.open(CongedialogComponent, {
      width: '400px',
      data: { employeeId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Effectuer des actions après la fermeture du dialogue si nécessaire
    });
  }

  employee:Employee;
  employeeID: any;

  router: any;
  allPointages: any[];
  totalWorkHours= 0;
  // pointages:any[]= [
  //   { heurePointage: '09:00:00' },
  //   { heurePointage: '12:30:00' },
  //   { heurePointage: '13:30:00' },
  //   { heurePointage: '17:00:00' }
  // ];
  test: any;


  calculateTotalWorkHours(pointages: Pointage[]): number {
    let totalHours = 0;

    for (let i = 0; i < pointages.length - 1; i += 2) {
      //console.log(pointages[i].heurePointage.split['T'][1].replace(".000+00",""))
      const start = new Date(`2000-01-01T${pointages[i].heurePointage}`);
      const end = new Date(`2000-01-01T${pointages[i + 1].heurePointage}`);
      const diff = end.getTime() - start.getTime();
      totalHours += diff / 1000 / 60 / 60; // Convert milliseconds to hours
    }

    return totalHours;
  }

  constructor(private comprefaceService:ComprefaceService  ,private congeService:CongeService ,private route: ActivatedRoute, private employeeService: EmployeeService ,private pointageService:PointageService,private dialog: MatDialog,private authService: AuthService) {
    this.getRole();
      this.route.params.subscribe((params: Params) => {
        this.employeeID = params['id'];
        
      })
      // this.totalWorkHours = this.calculateTotalWorkHours(this.pointages);

   }

  //  deleteConge(congeId: number) {
     
  //   if (this.conge && this.conge.id) {
      
  //     this.congeService.deleteConge(congeId).subscribe(
  //       () => {
  //         console.log('Congé deleted successfully.');
  //         // Perform any additional actions after successful deletion if needed
  //       },
  //       (error) => {
  //         console.error('Failed to delete congé:', error);
  //         // Handle error scenario appropriately
  //       }
  //     );
  //   }
  // }
  getRole() {
    this.userRole = localStorage.getItem('ROLE');
    console.log("xxxxxxxxxxxxxxxxxxxxxxx " + this.userRole);
    return this.userRole;
   
  }
  deleteConge(congeId: number) {
      this.congeService.deleteConge(congeId).subscribe(
        () => {
          console.log('Congé deleted successfully.');
          // Perform any additional actions after successful deletion if needed
          this.generateData();
          location.reload();

        },(error)=>{
          location.reload();

        }
      );
   
  }
  getconge() {
    throw new Error('Method not implemented.');
  }
  showSuccessMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  
  openEditDialog(){
    const dialogRef = this.dialog.open(EditEmplyeeComponent, {
      width: '400px',
      data: { employee: this.employee } // Pass the user information as data
    });
  }
   openEditModal() {
    // Ouvrir le modal en utilisant la méthode open() du MatDialog
    const dialogRef = this.dialog.open(AddEmplyeeDialogComponent, {
      width: '400px', // Définissez la largeur souhaitée du modal
      data: this.employee // Passez les données de l'employé au modal si nécessaire
    });

    // Souscrivez à l'événement de fermeture du modal
    dialogRef.afterClosed().subscribe(result => {
      // Traitez les données de retour du modal si nécessaire
      console.log('Données modifiées :', result);
      // Effectuez les actions appropriées après la modification des données
    });
  }
  generateData(){
    //this.employeeID=localStorage.getItem('IDUSER')
    this.getEmployeeByID(this.employeeID);
    this.getAllpointages(this.employeeID)
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.employeeID = params['id'];
    //  if(this.employeeID==='myProfile'){
    //    console.log('test');
    //    this.employeeID=103;
    //  }
    //   
    // })
   this.generateData()
   this.userSubject = this.authService.getCurrentUserSubject();
   this.userSubject = '103'; // Remplacez par votre sujet d'utilisateur réel

   this.getPhotoUrlBySubject(this.userSubject);
   

  }
  editCon(id:number, demandeconge : any){
    if (demandeconge.etat) demandeconge.etat=false;
    else demandeconge.etat=true;
    this.congeService.editConge(id , demandeconge).subscribe(data => {
      console.log("edinet data ========== "+data) ;
    })
    //this.router.navigate(['employee-profile', id]);

    }
   

  getPhotoUrlBySubject(subject: string) {
    this.comprefaceService.getPhotoUrlBySubject(subject)
      .then((photoUrl: string) => {
        this.photoUrl = photoUrl;
      })
      .catch((error: any) => {
        console.error('Failed to get user photo:', error);
        // Gérez l'erreur de récupération de la photo de l'utilisateur
      });
  }
  getEmployeeByID(id:any) {
    this.employeeService.getEmployeeByID(id).subscribe(data => {
      this.employee = data;
      this.photoUrl = `assets/images/employees/${this.employee.photo}`;
      console.log('+++++++++/*************--------',this.employee)

      //console.log(this.employee.pointages)
    },(err)=>{
      console.log(err);
      
    })
  }
  // getpointages(){
  //   this.pointageService.getpointages()
  //   .subscribe(data=>{
  //     this.allPointages=data;
     
  //   },err=>{

  //     console.log(err)
  //   })
    
  // }
  //login(){
    //this.authService.login('employe')
    //this.router.navigate(['/employeeProfile']);


  //}

  getAllpointages(employeeID){
    this.pointageService.getALLpointages(employeeID)
    .subscribe(data=>{
      this.allPointages=data;
      if(data){
        //this.totalWorkHours = this.calculateTotalWorkHours(this.allPointages);
        if(this.allPointages.length > 1){
          let start= new Date(this.allPointages[1].heurePointage);
          let end =new Date(this.allPointages[this.allPointages.length -1].heurePointage);
          const diff = end.getTime() - start.getTime();
          console.log(diff)
          this.totalWorkHours += diff / 1000 / 60 / 60; // Convert milliseconds to hours
          this.totalWorkHours=Math.round(this.totalWorkHours * 100) / 100
        }

       // 
       // this.totalWorkHours=new Date(this.allPointages[this.allPointages.length -1].heurePointage).getHours() - new Date(this.allPointages[1].heurePointage).getHours() 
      }
      
      
     
    },err=>{

      console.log(err)
    })
  }
}
  function openCongeDialog() {
    throw new Error('Function not implemented.');
  }

