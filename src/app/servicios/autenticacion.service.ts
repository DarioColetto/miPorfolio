import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from '../model/User';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "https://miporfolio-jpa.herokuapp.com/authorize"

  
  
  constructor(private http: HttpClient) { };
  
  

  login(user: User ): Observable<any> {

    return this.http.post<any>( this.url, user )

    }
  


  //Elimina el token al cerrar secion
  logout() {
    localStorage.removeItem('token');
    console.log("Bye bye")
  }

  //Servicio para verificar si existe la sesion
  public get logged(): boolean {
    return (localStorage.getItem('token') !== null);
  }









  
}

