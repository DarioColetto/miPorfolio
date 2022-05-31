import { Component,  OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Formacion } from 'src/app/model/Formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';


@Component({
  selector: 'app-agregar-formacion',
  templateUrl: './agregar-formacion.component.html',
  styleUrls: ['./agregar-formacion.component.css']
})
export class AgregarFormacionComponent implements OnInit{
  
  formacion_form = this.fb.group({
    
    nombre_institucion:['', Validators.required],
    titulo:['', Validators.required],
    descripcion:['', Validators.required],
    ano_inicio:[],
    ano_finalizacion:['', Validators.required],
    duracion:['', Validators.required],
    url_logo:['']
  })

  new_formacion!:Formacion;
  
  constructor(private formacionService: FormacionService, private router:Router, private fb:FormBuilder,
    
   ) { }

  ngOnInit(): void {}



  onSubmit():void{
    

    this.new_formacion=this.formacion_form.value
    this.formacionService.add( this.new_formacion).subscribe()
    this.router.navigate(['home/formacion'])
    .then(() => {
      window.location.reload();
    });
  }

}
