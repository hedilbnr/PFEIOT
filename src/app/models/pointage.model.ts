export class Pointage{
    id?: number;
    date: string;
    heure_pointage:string;
    utilisateur:string;
  heurePointage: any;
    constructor(id: number,
        date:string, heure_pointage:string,
        utlisateur:string){
            this.id= id;
            this.date = date;
            this.heure_pointage = heure_pointage;
            this.utilisateur = utlisateur;

    }
}