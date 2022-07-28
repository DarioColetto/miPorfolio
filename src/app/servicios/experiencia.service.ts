import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url: string = "https://miporfolio-jpa.herokuapp.com/experiencia";
  constructor(private http: HttpClient) { }


  getAll(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.url}/getAll`)
  }

  get(id: number): Observable<Experiencia> {

    return this.http.get<Experiencia>(`${this.url}/get/${id}`)

  }

  add(experiencia: Experiencia): Observable<any> {
    return this.http.post<Experiencia>(`${this.url}/add`, experiencia)
  }

  delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/delete/${id}`)
  }

  update(id: number, experiencia: Experiencia) {
    return this.http.put(`${this.url}/update/${id}`, experiencia)
  }
}
