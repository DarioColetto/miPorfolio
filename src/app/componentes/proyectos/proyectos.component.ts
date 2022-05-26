import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  host:{"id":"proyectos"}
})
export class ProyectosComponent implements OnInit {


  

  proyectos!: Proyecto[];
  constructor(private proyectoService:ProyectosService, 
    private viewportScroller: ViewportScroller,
    private router:Router, 
    ) { }

  ngOnInit(): void {

    this.proyectoService.getAll().subscribe(data =>{
      this.proyectos=data;

    })    
  }


    
    add():void {
      
      this.router.navigate(['proyecto-add'])
      this.viewportScroller.scrollToAnchor('proyectos');
    }
  
    update(id:number){
      this.router.navigate(['proyecto-update/',id])
    }


    del(id: number) {

      this.proyectoService.delete(id).subscribe(resp => {
  
        this.ngOnInit()
  
      });
  
    }
  
  

}
