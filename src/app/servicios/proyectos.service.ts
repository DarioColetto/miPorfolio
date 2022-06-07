import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  url: string = "https://miporfolio-jpa.herokuapp.com/proyecto";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.url}/getAll`)
  }

  add(proyect: Proyecto): Observable<any> {

    return this.http.post(`${this.url}/add`, proyect)

  }

  delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/delete/${id}`)
  }
  get(id: number): Observable<Proyecto> {

    return this.http.get<Proyecto>(`${this.url}/get/${id}`)
  }

  update(id: number, proyecto: Proyecto) {
    return this.http.put<any>(`${this.url}/update/${id}`, proyecto)
  }



}


