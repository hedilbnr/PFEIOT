export class utilisateur{
    id?: number;
    nom: string;
    prenom:string;
    email : string;
    motDePasse: string;
    dateNaiss:string;
    image :string;
    pointages: string;
    demandeConges: string;
    role: string;
    demandeUsers: string
    constructor(id: number,
        nom: string,
        prenom:string,
        email : string,
        motDePasse: string,
        dateNaiss:string,
        image :string,
        pointages: string,
        demandeConges: string,
        role: string,
        demandeUsers: string
        ){
            this.id= id;
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.motDePasse = motDePasse
            this.dateNaiss = dateNaiss;
            this.image = image;
            this.pointages = pointages;
            this.demandeConges= demandeConges;
            this.role = role;
            this.demandeUsers = demandeUsers
    }
    static create(){
        return Object.create(this.prototype)
    }
}