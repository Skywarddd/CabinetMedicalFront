import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { InfirmierModel } from 'src/app/model/infirmier/infirmier.model';
import { Patient } from 'src/app/model/patient/patient';
import { ServicePatientService } from 'src/app/service/patient/service-patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  displayFormCreate: boolean = false;

  infirmier!: InfirmierModel;

  showInfirmier: boolean = false;

  constructor(private service: ServicePatientService, private router: Router) { }

  ngOnInit(): void {
  }

  public displayCreate(){
    this.displayFormCreate = !this.displayFormCreate;
  }

  postPatient = (nom: HTMLInputElement, prenom: HTMLInputElement, dateNaissance: HTMLInputElement, sexe: HTMLInputElement, adresse: HTMLInputElement, numeroSecu: HTMLInputElement) => {
    const item = new Patient(nom.value, prenom.value, dateNaissance.value, sexe.value, adresse.value, numeroSecu.value)
    item.infirmier = this.infirmier;
    this.service.postPatient(item).pipe(
      tap(() => this.router.navigateByUrl('/patient'))
  ).subscribe();
  }

  public getInfirmierById (id: string): any {
    return this.service.getInfirmierById(id).subscribe(resu => {
      console.log(resu);
      this.infirmier = resu;
    })
  }

  switchShowInfirmier() {
    this.showInfirmier = true;
  }

}
