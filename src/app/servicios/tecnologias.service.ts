import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/Tecnologia';

@Injectable({
  providedIn: 'root'
})


export class TecnologiasService {
  url: string = "http://localhost:8080/tecnologia";
  constructor(private http: HttpClient) { }


  getAll(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(`${this.url}/getAll`)
  }

  add(tecnologia: Tecnologia): Observable<Tecnologia> {
    
  
    return this.http.post<Tecnologia>(`${this.url}/add`, tecnologia);
    

  }

  delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/delete/${id}`)
  }

  get(id: number): Observable<Tecnologia> {

    return this.http.get<Tecnologia>(`${this.url}/get/${id}`)
  }

  update(id: number, tecnologia: Tecnologia) {
    return this.http.put<any>(`${this.url}/update/${id}`, tecnologia)
  }



}
