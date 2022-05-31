import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  
  
  add_experiencia_form = this.fb.group({
    
    nombre_empresa:['', Validators.required],
    puesto:['', Validators.required],
    descripcion:['', Validators.required],
    ano_inicio:[],
    ano_finalizacion:['', Validators.required],
    web:['', Validators.required],
    url_logo:[]
  })

  new_experiencia!:Experiencia;
  
  constructor(
    private experienciaService: ExperienciaService, 
    private fb:FormBuilder,
    private router:Router
   ) {}

  ngOnInit(): void {}



  onSubmit():void{
    

    this.new_experiencia=this.add_experiencia_form.value
    this.experienciaService.add( this.new_experiencia).subscribe()
    this.router.navigate(['home/experiencia'])
    .then(() => {
      window.location.reload();
    });
  }

}
