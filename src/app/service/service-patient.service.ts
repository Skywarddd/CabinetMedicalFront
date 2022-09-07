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


  // @ts-ignore
  getAllPatient: Observable<Patient[]> = () => {
    return this.http.get<Patient[]>(`${this.domaine}/Patient`)
  }
  deletePatient = (id: string | undefined) => {
    return this.http.delete(`${this.domaine}/Patient/${id}`)
  }
}
