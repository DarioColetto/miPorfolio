import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Social } from '../model/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  url: string = "http://localhost:8080/social";
  constructor(private http: HttpClient) { }



  getAll(): Observable<Social[]> {
    return this.http.get<Social[]>(`${this.url}/getAll`)
  }

  add(social: Social): Observable<any> {

    return this.http.post<Social>(`${this.url}/add`, social)

  }

  delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/delete/${id}`)
  }
  get(id: number): Observable<Social> {

    return this.http.get<Social>(`${this.url}/get/${id}`)
  }

  update(id: number, Social: Social) {
    return this.http.put<any>(`${this.url}/update/${id}`, Social)
  }

}
