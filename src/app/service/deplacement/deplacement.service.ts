import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deplacement } from '../../model/deplacement/deplacement.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeplacementService {

  private url: string = "http://localhost:8080/deplacement";

  constructor(private http: HttpClient) { }

  getDeplacements(): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(this.url);
  }

  deleteDeplacement(id: string) {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
