import { Component, OnInit } from '@angular/core';
import { InfirmierModel } from 'src/app/model/infirmier/infirmier.model';
import { InfirmierService } from 'src/app/service/infirmier/infirmier.service';
import {Patient} from "../../model/patient/patient";

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {

  infirmiers!: InfirmierModel[];

  infirmierId: InfirmierModel = new InfirmierModel;
  patientId: Patient = new Patient();

  infirmiersNom!: InfirmierModel[];

  afficherCreateForm: boolean = false;

  constructor(private service: InfirmierService) { }

  ngOnInit(): void {
  }

  getInfirmiers = () => {
// @ts-ignore
this.service.getInfirmiers().subscribe((resu: any) => {
  this.infirmiers = resu;
  console.log(resu)
}, (err: any) => {
  console.error(err)
})
  }

  getInfirmierById = (id: HTMLInputElement) => {
    this.service.getInfirmierById(id.value).subscribe((resu: any) => {
      this.infirmierId = resu;
      console.log(resu)
    }, (err: any) => {
      console.error(err)
    })
  }

  getInfirmierByNom = (nom: HTMLInputElement) => {
    this.service.getInfirmierByNom(nom.value).subscribe((resu: any) => {
      this.infirmiersNom = resu;
      console.log(resu)
    }, (err: any) => {
      console.error(err)
    })
  }

//add avec le constructeur plein
  addInfirmier = (nom: HTMLInputElement, prenom: HTMLInputElement, numPro: HTMLInputElement, telMobile: HTMLInputElement, telFixe: HTMLInputElement) => {
    const item = new InfirmierModel(nom.value, prenom.value, numPro.value, telMobile.value, telFixe.value)
    this.service.createInfirmier(item).subscribe(resu => {this.getInfirmiers()},
      (err: any) => {
        console.error(err)
      });
    nom.value = '';
    prenom.value = '';
    numPro.value = '';
    telMobile.value = '';
    telFixe.value = '';
  }

  updateInfirmier = (id: string|undefined, nom: HTMLInputElement, prenom: HTMLInputElement, numPro: HTMLInputElement, telMobile: HTMLInputElement, telFixe: HTMLInputElement) => {
    const item = new InfirmierModel(nom.value, prenom.value, numPro.value, telMobile.value, telFixe.value)
    this.service.updateInfirmier(item, id).subscribe();
  }

  delete = (id: string|undefined) => {
    this.service.deleteInfirmier(id).subscribe(ok => {
      this.infirmiers = this.infirmiers.filter(item => item.id != id)
    })
  }
  getPatientByDeplacement = (id: string|undefined) =>{
    this.service.getPatientByDeplacement(id).subscribe((resu: any) => {
      this.patientId = resu;
      console.log(resu)
    }, (err: any) => {
      console.error(err)
    })
  }

  switchAfficherCreateForm() {
    this.afficherCreateForm = true
  }

  switchAfficherUpdateForm(item: InfirmierModel) {
    item.update = true
  }

  switchAfficherDetails(item: InfirmierModel) {
    item.details = !item.details;
  }
}
