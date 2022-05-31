import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/About';
import { AboutService } from 'src/app/servicios/about.service';


@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {


  about!:About;


 about_form = this.fb.group({
  
        nombre:[],
        descripcion:[],
        foto_perfil:[],
        titulo:[],
        email:[],
        tel:[]

      });

  constructor(    
    private aboutService:AboutService,
    private router:Router,
    private activatedRoute: ActivatedRoute, 
    private fb:FormBuilder,
    ) { }

  ngOnInit(): void {

    
    this.aboutService.get(1).subscribe(
      data=>{
       
       this.about=data
       this.about_form.controls['nombre'].setValue(data.nombre);
       this.about_form.controls['descripcion'].setValue(data.descripcion);
       this.about_form.controls['foto_perfil'].setValue(data.foto_perfil);
       this.about_form.controls['titulo'].setValue(data.titulo);
       this.about_form.controls['email'].setValue(data.email);
       this.about_form.controls['tel'].setValue(data.tel);
      })
    
  }


  onSubmit(){
    this.about= this.about_form.value
    
    this.aboutService.update(1, this.about).subscribe(data=>{

        })

    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }













}