import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/model/Social';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SocialService } from 'src/app/servicios/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  
  
  isLogged= this.authService.logged
  socialList!:Social[];


  constructor(
    private socialService:SocialService,
    private authService:AutenticacionService) { }

  ngOnInit(): void { 
    this.socialService.getAll().subscribe(data=>{
      this.socialList=data

    })
  }
  
  
}
