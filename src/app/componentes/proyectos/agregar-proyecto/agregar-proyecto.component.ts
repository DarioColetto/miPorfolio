import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/Proyecto';



@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  
  proyecto_form = this.fb.group({
    
    nombre_proyecto:['', Validators.required],
    descripcion:['', Validators.required],
    tecnologias:['', Validators.required],
    url_logo:['', Validators.required]
  })

  new_proyecto!:Proyecto

  constructor(private proyectoService:ProyectosService, private fb:FormBuilder,private router:Router) {}

  ngOnInit(): void {}

  onSubmit():void{
    
    this.new_proyecto= this.proyecto_form.value

    this.proyectoService.add( this.new_proyecto).subscribe()
    this.router.navigate(["home/proyectos"])
    .then(() => {
      window.location.reload();
    });
  
  }

}
