import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/Formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarformacion',
  templateUrl: './editarformacion.component.html',
  styleUrls: ['./editarformacion.component.css']
})



export class EditarformacionComponent implements OnInit {

 
  
  updated_formacion!: Formacion;


  formacion_form = this.fb.group({
  
        nombre_institucion:[],
        titulo:[],
        descripcion:[],
        ano_inicio:[],
        ano_finalizacion:[],
        duracion:[],
        url_logo:[]

      });


  constructor(

    private formacionService: FormacionService, 
    private router:Router,
    private activatedRoute: ActivatedRoute, 
    private fb:FormBuilder ) {}

  ngOnInit(): void {
 
   let id:number= Number(this.activatedRoute.snapshot.paramMap.get("id"));

   console.log(id)
  
   
   this.formacionService.get(id).subscribe(
     data=>{
 
      this.updated_formacion=data
      this.formacion_form.controls['nombre_institucion'].setValue(data.nombre_institucion);
      this.formacion_form.controls['titulo'].setValue(data.titulo);
      this.formacion_form.controls['descripcion'].setValue(data.descripcion);
      this.formacion_form.controls['ano_inicio'].setValue(data.ano_inicio);
      this.formacion_form.controls['ano_finalizacion'].setValue(data.ano_finalizacion);
      this.formacion_form.controls['duracion'].setValue(data.duracion);
      this.formacion_form.controls['url_logo'].setValue(data.url_logo);

    })

  }

  onSubmit():void{

    this.updated_formacion=this.formacion_form.value
    this.formacionService.update(this.updated_formacion.id_formacion, this.updated_formacion).subscribe(data=>{

     this.router.navigate(['formacion'])
      
    })
    
  
  }


  
}
