import {Component, OnInit} from '@angular/core';
import { InfirmierModel } from 'src/app/model/infirmier/infirmier.model';
import {Patient} from "../../model/patient";
import {ServicePatientService} from "../../service/service-patient.service";

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  // @ts-ignore
  patients: Patient[] = [new Patient()];

  // @ts-ignore
  patient: Patient = new Patient();

  // @ts-ignore
  patients2!: Patient[];

  infirmier!: InfirmierModel;

  showAllPatients: boolean = false;
  displayFormCreate: boolean = false;

  showInfirmier: boolean = false;


  constructor(private service: ServicePatientService) {
  }

  ngOnInit(): void {
    this.getAllPatient()
  }

  public showAllPatient() {
    if (this.showAllPatients == false) {
      this.showAllPatients= true;
    } else {
      this.showAllPatients = false;
    }
  }

  public displayDetail(item: Patient){
    item.detail = !item.detail;
  }
  public displayCreate(){
    this.displayFormCreate = !this.displayFormCreate;
  }

  showUpdateForm(item: Patient) {
    item.update = true
  }

  switchShowInfirmier() {
    this.showInfirmier = true;
  }

  public getInfirmierById (id: string): any {
    return this.service.getInfirmierById(id).subscribe(resu => {
      console.log(resu);
      this.infirmier = resu;
    })
  }

  public getAllPatient = () => {
    this.service.getAllPatient().subscribe(item => {
      this.patients = item
    }, (err: any) => {
      console.error(err)
    })
  }

  getPatientById = (id: HTMLInputElement) => {
    this.service.getPatientById(id.value).subscribe(resu => {
      this.patient = resu;
      console.log(this.patient);
    })
  }
  getPatientByName = (name: HTMLInputElement) => {
    this.service.getPatientByName(name.value).subscribe(resu => {
      this.patients2 = resu;
      console.log(this.patients2);
    })
  }

  postPatient = (nom: HTMLInputElement, prenom: HTMLInputElement, dateNaissance: HTMLInputElement, sexe: HTMLInputElement, adresse: HTMLInputElement, numeroSecu: HTMLInputElement) => {
    const item = new Patient(nom.value, prenom.value, dateNaissance.value, sexe.value, adresse.value, numeroSecu.value)
    item.infirmier = this.infirmier;
    this.service.postPatient(item).subscribe(resu => {
      console.log(item)
    }, (err: any) => {
      console.error(err)
    });
  }
  updatePatient = (id: string|undefined, nom: HTMLInputElement, prenom: HTMLInputElement, dateNaissance: HTMLInputElement, sexe: HTMLInputElement, adresse: HTMLInputElement, numeroSecu: HTMLInputElement) => {
    const item = new Patient(nom.value, prenom.value, dateNaissance.value, sexe.value, adresse.value, numeroSecu.value)
    this.service.updatePatient(item, id).subscribe();
  }


  deletePatient = (id: string | undefined) => {
    this.service.deletePatient(id).subscribe(ok => {
      this.patients = this.patients.filter(item => item.id != id)
    })
  }
}
