import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Experiencia } from 'src/app/model/Experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  host:{'id':"experiencia"}
})
export class ExperienciaComponent implements OnInit {

  id_for_delete!:number
  modalRef?: BsModalRef;
  
  experienciaList!: Experiencia[];
  


  constructor(private experienciaService: ExperienciaService,
    private authService:AutenticacionService,
    private router:Router,
    private modalService: BsModalService ) { }

    isLogged= this.authService.logged

  ngOnInit(): void {

    this.experienciaService.getAll().subscribe(data => {

      this.experienciaList = data
    });
  }



  add():void {
    
    this.router.navigate(['home/experiencia-add'])
    
  }


  update(id:number){
    this.router.navigate(['home/experiencia-update/',id])
  }

  
  openModal(template: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});


    this.id_for_delete=id

    console.log(this.id_for_delete)
  }


  confirm(): void {
          console.log(this.id_for_delete)
    this.experienciaService.delete(this.id_for_delete).subscribe();
    window.location.reload();
    this.modalRef?.hide();
  }
 
  decline(): void {
  
    this.modalRef?.hide();
  }
}
