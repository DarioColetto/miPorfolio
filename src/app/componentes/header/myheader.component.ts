import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/About';
import { AboutService } from 'src/app/servicios/about.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';



@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css'],
  host:{'id': 'myheader'}
})
export class MyHeaderComponent implements OnInit {
  
  @Input () item:any;
  cancelEvent: boolean = false
 
  about:About = {
   id_about: 0,
   nombre: '',
   descripcion: '',
   foto_perfil: '',
   titulo: '',
   email: '',
   tel: ''
 }
 


  constructor(private viewportScroller: ViewportScroller, 
    private aboutService:AboutService,
    private authenticatioService:AutenticacionService,
    private router:Router,
    
    ) {}

  ngOnInit(): void {
    

    
    this.aboutService.get(1).subscribe(data =>{
      

      this.about=data
      console.log(data);

    });

  }







edit_form(){
  this.cancelEvent = true
    
  this.viewportScroller.scrollToAnchor('formacion');
}

cancelHandler(): void {
  this.cancelEvent = false;
}
}
