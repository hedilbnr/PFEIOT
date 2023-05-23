import { Conge } from "./congee.model";

export class Employee {
   id:number;
    nom:string;
    prenom:string;
    email:string;
    dateNaiss:string;
    photo:string;
    pointages:number;
    demandeConges: Conge;
    mot_de_passe: string;

    constructor(
        employeeId:number,
        nom:string,
        prenom:string,
        email:string,
        mot_de_passe:string,
        dateNaiss: string,
        photo:string,
        demandeConges:any
       
    ){
        this.id =  employeeId
        this.nom =  nom
        this.prenom = prenom
        this.email = email
        this.mot_de_passe=mot_de_passe
        this.dateNaiss = dateNaiss
        this.photo=photo
        this.demandeConges=demandeConges
       
    }
    static create(){
        return Object.create(this.prototype)
    }
  
    
}