import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  host:{"id":"proyectos"}
})
export class ProyectosComponent implements OnInit {

  id_for_delete!:number
  modalRef?: BsModalRef;

  proyectos!: Proyecto[];
  constructor(private proyectoService:ProyectosService, 
    private authService:AutenticacionService,
    private router:Router,
    private modalService: BsModalService 
    ) { }

    isLogged= this.authService.logged

  ngOnInit(): void {

    this.proyectoService.getAll().subscribe(data =>{
      this.proyectos=data;

     
    })    
  }


    
    add():void {
      
      this.router.navigate(['home/proyecto-add'])
      
    }
  
    update(id:number){
      this.router.navigate(['home/proyecto-update/',id])
    }


    openModal(template: TemplateRef<any>, id:number) {
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});


      this.id_for_delete=id

      console.log(this.id_for_delete)
    }


    confirm(): void {
            console.log(this.id_for_delete)
      this.proyectoService.delete(this.id_for_delete).subscribe(resp => {});
      window.location.reload();
      this.modalRef?.hide();
    }
   
    decline(): void {
    
      this.modalRef?.hide();
    }
}
