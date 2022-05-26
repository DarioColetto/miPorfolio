import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "http://localhost:8080/authorize"

  
  
  constructor(private http: HttpClient, private router: Router) { };


  login(user: User ) {
    
    this.http.post<any>(`${this.url}/${user.username}`, user )
    .subscribe(response=>{
  
      console.log(response)

      localStorage.setItem('token', response.token)

      console.log("you are in")
    })
    
   
 
  }


  //Elimina el token al cerrar secion
  logout() {
    localStorage.removeItem('token');
    console.log("Bye bye")
  }

  //Servicio para verificar si existe la sesion
  public get loeged(): boolean {
    return (localStorage.getItem('token') !== null);
  }

}