import { InfirmierModel } from "./infirmier/infirmier.model";

export class Patient{



  public id?: string;
  public nom?: string;
  public prenom?: string;
  public dateDeNaissance?: string;
  public sexe?: string;
  public adresse?: string;
  public numeroSecu?: string;
  public isActive?: boolean;
  public detail?: boolean = false;
  public update?: boolean = false;
  public infirmier?: any;


  constructor(nom: string ="", prenom: string="",adresse: string = "",dateDeNaissance: string = "", sexe: string="",numeroSecu: string ="") {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.dateDeNaissance = dateDeNaissance;
    this.sexe = sexe;
    this.numeroSecu = numeroSecu;
    this.isActive = true;
  }
}
