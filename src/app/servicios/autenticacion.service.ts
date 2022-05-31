import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "http://localhost:8080/authorize"

  
  
  constructor(private http: HttpClient) { };


  login(user: User ) {
    
    this.http.post<any>(`${this.url}/${user.username}`, user )
    .subscribe(response=>{
  

      localStorage.setItem('token', response.token)

      console.log("You are in!")
    })
    
   
 
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