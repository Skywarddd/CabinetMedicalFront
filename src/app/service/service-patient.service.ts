import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";

@Injectable({
  providedIn: 'root'
})
export class ServicePatientService {
  domaine: string = environment.domaine;

  constructor(private http: HttpClient) { }


  public getAllPatient = (): Observable<Patient[]> => {
    return this.http.get<Patient[]>(`${this.domaine}/patient`)
  }

  getPatientById = (id: string) => {
    return this.http.get(`${this.domaine}/patient/${id}`)
  }
  getPatientByName = (name: string): Observable<Patient[]>  => {
    return this.http.get<Patient[]>(`${this.domaine}/patient/name/${name}`)
  }

  deletePatient = (id: string | undefined) => {
    return this.http.delete(`${this.domaine}/patient/${id}`)
  }

  postPatient: (item: Patient) => Observable<Patient> = (item: Patient) => {
    return this.http.post<Patient>(`${this.domaine}/patient/`, item)
  }
  updatePatient:(item: Patient, id: string | undefined ) => Observable<Patient> = (item: Patient, id:string | undefined) => {
    return this.http.put(`${this.domaine}/patient/${id}`, item)
  }
}
