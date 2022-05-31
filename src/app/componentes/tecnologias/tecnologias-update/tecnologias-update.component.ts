import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/Tecnologia';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-tecnologias-update',
  templateUrl: './tecnologias-update.component.html',
  styleUrls: ['./tecnologias-update.component.css']
})
export class TecnologiasUpdateComponent implements OnInit {

  id!:number;
  updated_tecnologia!:Tecnologia;


 tecnologia_form = this.fb.group({
  
        nombre_tecnologia:[],
        descripcion:[],
        nivel:[],

      });

  constructor(    
    private tecnologiaService:TecnologiasService,
    private router:Router,
    private activatedRoute: ActivatedRoute, 
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    
    
    this.tecnologiaService.get(this.id).subscribe(
      data=>{
       
       this.updated_tecnologia=data
       this.tecnologia_form.controls['nombre_tecnologia'].setValue(data.nombre_tecnologia);
       this.tecnologia_form.controls['descripcion'].setValue(data.descripcion);
       this.tecnologia_form.controls['nivel'].setValue(data.nivel);
       
    })

  } 


  onSubmit(){
    
    this.updated_tecnologia=this.tecnologia_form.value
    this.tecnologiaService.update(this.id, this.updated_tecnologia).subscribe()

    this.router.navigate(['home/tecnologias-list']).then(() => {
      window.location.reload();
    });



  }
}
