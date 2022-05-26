import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../model/Formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  url: string = "http://localhost:8080/formacion";
  constructor(private http: HttpClient) { }


  getAll(): Observable<Formacion[]> {
    return this.http.get<Formacion[]>(`${this.url}/getAll`)
  }

  get(id: number): Observable<Formacion> {

    return this.http.get<Formacion>(`${this.url}/get/${id}`)

  }

  add(formacion: Formacion): Observable<any> {
    return this.http.post<Formacion>(`${this.url}/add`, formacion)
  }

  delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/delete/${id}`)
  }

  update(id: number, formacion: Formacion) {
    return this.http.put(`${this.url}/update/${id}`, formacion)
  }
}
