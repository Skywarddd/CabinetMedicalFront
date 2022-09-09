import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InfirmierModel } from '../model/infirmier/infirmier.model';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../model/patient";

@Injectable({
  providedIn: 'root'
})
export class InfirmierService {

  domaine: string = environment.domaine;

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getInfirmiers: Observable<InfirmierModel[]> = () => {
    return this.http.get<InfirmierModel[]>(`${this.domaine}/infirmier`)
  }

  getInfirmierById: (id: string|undefined) => Observable<InfirmierModel> = (id: string|undefined) => {
    return this.http.get<InfirmierModel>(`${this.domaine}/infirmier/${id}`)
  }

  getInfirmierByNom: (nom: string|undefined) => Observable<InfirmierModel[]> = (nom: string|undefined) => {
    return this.http.get<InfirmierModel[]>(`${this.domaine}/infirmier/name/${nom}`)
  }

  updateInfirmier: (item: InfirmierModel, id:string|undefined) => Observable<InfirmierModel> = (item: InfirmierModel, id:string|undefined) => {
    return this.http.put(`${this.domaine}/infirmier/${id}`, item)
  }

  createInfirmier: (item: InfirmierModel) => Observable<InfirmierModel> = (item: InfirmierModel) => {
    return this.http.post(`${this.domaine}/infirmier`, item)
  }

  deleteInfirmier = (id: string|undefined) => {
    return this.http.delete(`${this.domaine}/infirmier/${id}`)
  }
  getPatientByDeplacement:(id:string|undefined) => Observable<Patient> = (id:string|undefined) => {
    return this.http.get<Patient>(`${this.domaine}/patient/deplacement/${id}`)
  }
}
