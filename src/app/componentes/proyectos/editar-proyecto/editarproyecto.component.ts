import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';



@Component({
  selector: 'app-form-edit-proyect',
  templateUrl: './editarProyecto.component.html',
  styleUrls: ['./editarproyecto.css']
})
export class EditarproyectoComponent implements OnInit {

  
  updated_proyecto!:Proyecto;


 proyecto_form = this.fb.group({
  
        nombreProyecto:[],
        descripcion:[],
        tecnologias:[],
        url_logo:[]

      });

  constructor(    
    private proyectoService:ProyectosService,
    private router:Router,
    private activatedRoute: ActivatedRoute, 
    private fb:FormBuilder) { }

  ngOnInit(): void {

    let id:number= Number(this.activatedRoute.snapshot.paramMap.get("id"));
    
    
    this.proyectoService.get(id).subscribe(
      data=>{
       
       this.updated_proyecto=data
       this.proyecto_form.controls['nombreProyecto'].setValue(data.nombre_proyecto);
       this.proyecto_form.controls['descripcion'].setValue(data.descripcion);
       this.proyecto_form.controls['tecnologias'].setValue(data.tecnologias);
       this.proyecto_form.controls['url_logo'].setValue(data.url_logo);

    })

  } 


  onSubmit(){
    this.updated_proyecto=this.proyecto_form.value
    
    this.proyectoService.update(this.updated_proyecto.id_proyecto, this.updated_proyecto).subscribe(data=>{

    this.router.navigate(['proyectos'])
        })

  }

}