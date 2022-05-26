import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {


  
  updated_experiencia!: Experiencia;


  experiencia_form = this.fb.group({
  
        nombre_empresa:[],
        puesto:[],
        descripcion:[],
        ano_inicio:[],
        ano_finalizacion:[],
        web:[],
        url_logo:[]

      });


  constructor(

    private experienciaService: ExperienciaService,
    private router:Router,
    private activatedRoute: ActivatedRoute, 
    private fb:FormBuilder ) {}

  ngOnInit(): void {
 
   let id:number= Number(this.activatedRoute.snapshot.paramMap.get("id"));

   console.log(id)
  
   
   this.experienciaService.get(id).subscribe(
     data=>{
 
      this.updated_experiencia=data
      this.experiencia_form.controls['nombre_empresa'].setValue(data.nombre_empresa);
      this.experiencia_form.controls['puesto'].setValue(data.puesto);
      this.experiencia_form.controls['descripcion'].setValue(data.descripcion);
      this.experiencia_form.controls['ano_inicio'].setValue(data.ano_inicio);
      this.experiencia_form.controls['ano_finalizacion'].setValue(data.ano_finalizacion);
      this.experiencia_form.controls['duracion'].setValue(data.web);
      this.experiencia_form.controls['url_logo'].setValue(data.url_logo);

    })

  }

  onSubmit():void{

    this.updated_experiencia=this.experiencia_form.value
    this.experienciaService.update(this.updated_experiencia.id_experiencia, this.updated_experiencia).subscribe(data=>{

     this.router.navigate(['experiencia'])
      
    })
    
  
  }


  
}
