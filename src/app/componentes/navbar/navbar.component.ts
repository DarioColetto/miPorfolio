import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private authService:AutenticacionService) { }

  isLogged= this.authService.logged

  ngOnInit(): void {
  }



  logout(){
    this.authService.logout();
    this.router.navigate(["/"])  
    .then(() => {
      window.location.reload();
    })
    
  }
}
