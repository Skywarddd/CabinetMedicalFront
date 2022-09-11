export class InfirmierModel {
  public id?: string;
  public nom?: string;
  public prenom?: string;
  public numPro?: number;
  public telMobile?: string;
  public telFixe?: string;
  public active?: boolean;
  public details?: boolean = false;
  public update?: boolean = false;
  public deplacements?: any[];

  public constructor(nom: string = '', prenom: string = '', numPro: number = 0, telMobile: string = '', telFixe: string = '') {
    this.nom = nom;
    this.prenom = prenom;
    this.active = true;
    this.numPro = numPro;
    this.telMobile = telMobile;
    this.telFixe = telFixe;
  }

}
