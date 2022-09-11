import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { InfirmierModel } from 'src/app/model/infirmier/infirmier.model';
import { InfirmierService } from 'src/app/service/infirmier/infirmier.service';

@Component({
  selector: 'app-new-infirmier',
  templateUrl: './new-infirmier.component.html',
  styleUrls: ['./new-infirmier.component.css']
})
export class NewInfirmierComponent implements OnInit {

  infirmiers!: InfirmierModel[];

  constructor(private service: InfirmierService, private router: Router) { }

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

  //add avec le constructeur plein
  addInfirmier = (nom: HTMLInputElement, prenom: HTMLInputElement, numPro: HTMLInputElement, telMobile: HTMLInputElement, telFixe: HTMLInputElement) => {
    const item = new InfirmierModel(nom.value, prenom.value, Number(numPro.value), telMobile.value, telFixe.value)
    this.service.createInfirmier(item).pipe(
      tap(() => this.router.navigateByUrl('/infirmier'))
  ).subscribe();
    nom.value = '';
    prenom.value = '';
    numPro.value = '';
    telMobile.value = '';
    telFixe.value = '';
  }

}
