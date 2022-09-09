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
    return this.http.get<Patient[]>(`${this.domaine}/Patient`)
  }

  getPatientById = (id: string) => {
    return this.http.get(`${this.domaine}/Patient/${id}`)
  }
  getPatientByName = (name: string): Observable<Patient[]>  => {
    return this.http.get<Patient[]>(`${this.domaine}/Patient/name/${name}`)
  }

  deletePatient = (id: string | undefined) => {
    return this.http.delete(`${this.domaine}/Patient/${id}`)
  }

  postPatient: (item: Patient) => Observable<Patient> = (item: Patient) => {
    return this.http.post<Patient>(`${this.domaine}/Patient/post`, item)
  }
  updatePatient:(item: Patient, id: string | undefined ) => Observable<Patient> = (item: Patient, id:string | undefined) => {
    return this.http.put(`${this.domaine}/Patient/${id}`, item)
  }
}
