export class Conge{
    id: number ;
    dateDebut: string;
     dateFin: string;
     type: string;
    etat: boolean;
    constructor(id, dateDebut, dateFin, type, etat){
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.type = type;
        this.etat = etat
    }
  
}