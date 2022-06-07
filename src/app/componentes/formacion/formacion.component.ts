import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Formacion } from 'src/app/model/Formacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { FormacionService } from 'src/app/servicios/formacion.service';


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
  host:{'id':"component-title"}
})
export class FormacionComponent implements OnInit {

  formaciones!: Formacion[];
  id:number=0

  id_for_delete!:number
  modalRef?: BsModalRef;


  constructor(private formacionService: FormacionService, 
    private router:Router,
    private authService:AutenticacionService,
    private modalService: BsModalService  ) { }

    isLogged= this.authService.logged

  ngOnInit(): void {


    this.formacionService.getAll().subscribe(dataForm => {

      this.formaciones = dataForm

    });
  }



  add():void {

    this.router.navigate(['home/formacion-add'])
    
    }


  update(id:number){
    
    this.router.navigate(['home/formacion-update/',id])
  }


  
  openModal(template: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});


    this.id_for_delete=id

    console.log(this.id_for_delete)
  }


  confirm(): void {
          console.log(this.id_for_delete)
    this.formacionService.delete(this.id_for_delete).subscribe();
    window.location.reload();
    this.modalRef?.hide();
  }
 
  decline(): void {
  
    this.modalRef?.hide();
  }

}
