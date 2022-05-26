import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tecnologia } from 'src/app/model/Tecnologia';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {

  @Output() cancelEvent = new EventEmitter();
  
  tecnologia_form = this.fb.group({
    
    nombre_tecnologia:['', Validators.required],
    descripcion:['', Validators.required],
    nivel:['', Validators.required],

  })

  new_tecnologia!:Tecnologia;
  
  constructor(private tecnologiaService:TecnologiasService, private fb:FormBuilder,
    
   ) { }

  ngOnInit(): void {}



  onSubmit():void{
    

    this.new_tecnologia= this.tecnologia_form.value
    this.tecnologiaService.add( this.new_tecnologia).subscribe(data=>{

      

      this.ngOnInit()

    })
    
  }

   cancel():void{
    console.log("Canceled")
    this.cancelEvent.emit();
    
    
  }
}
