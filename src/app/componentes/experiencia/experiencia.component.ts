import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  host:{'id':"experiencia"}
})
export class ExperienciaComponent implements OnInit {


  
  experienciaList!: Experiencia[];
  


  constructor(private experienciaService: ExperienciaService,private viewportScroller: ViewportScroller,
    private router:Router) { }

  ngOnInit(): void {

    this.experienciaService.getAll().subscribe(data => {

      this.experienciaList = data
    });
  }



  add():void {
    
    this.router.navigate(['experiencia-add'])
    this.viewportScroller.scrollToAnchor('experiencia');
    
    
  }


  update(id:number){
    this.router.navigate(['experiencia-update/',id])
  }

  
  del(id: number) {

    this.experienciaService.delete(id).subscribe(resp => {

      console.log(resp);
      this.ngOnInit()

    });
  }

}
