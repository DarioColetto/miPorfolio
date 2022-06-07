import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/About';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url: string = "https://miporfolio-jpa.herokuapp.com/about";

  constructor(private http: HttpClient) { }


  get(id: number): Observable<About> {

    return this.http.get<About>(`${this.url}/get/${id}`)

  }

  update(id: number, about: About) {
    return this.http.put(`${this.url}/update/${id}`, about)
  }

}
