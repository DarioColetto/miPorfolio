import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/model/About';
import { Social } from 'src/app/model/Social';
import { AboutService } from 'src/app/servicios/about.service';
import { SocialService } from 'src/app/servicios/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  
  @Input () item:any;
  
  socialList!:Social[];
  about: About={
    id_about: 0,
    nombre: '',
    descripcion: '',
    foto_perfil: '',
    titulo: '',
    email: '',
    tel: ''
  };
  
  constructor(private socialService:SocialService,private aboutService:AboutService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void { 
    this.socialService.getAll().subscribe(data=>{
      this.socialList=data

      console.log(this.socialList)
    })

        
    this.aboutService.get(1).subscribe(data =>{
        
      this.about=data
      
    })
  }
  
  
  deleteProyecto(id:number){
      
    this.socialService.delete(id).subscribe(resp=>{
      
    this.ngOnInit()
      
    });

  }

  cancelEvent: boolean = false
  add_social():void {
    this.cancelEvent = true

    this.viewportScroller.scrollToAnchor('proyectos');
  }

  cancelHandler(): void {
    this.cancelEvent = false;
  }
}
