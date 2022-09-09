export class InfirmierModel {
  public id?: string;
  public nom?: string;
  public prenom?: string;
  public numPro?: string;
  public telMobile?: string;
  public telFixe?: string;
  public active?: boolean;
  public details?: boolean = false;
  public update?: boolean = false;

  public constructor(nom: string = '', prenom: string = '', numPro: string = '', telMobile: string = '', telFixe: string = '') {
    this.nom = nom;
    this.prenom = prenom;
    this.active = true;
    this.numPro = numPro;
    this.telMobile = telMobile;
    this.telFixe = telFixe;
  }
}