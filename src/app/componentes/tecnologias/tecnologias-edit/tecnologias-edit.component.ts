import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tecnologia } from 'src/app/model/Tecnologia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-tecnologias-edit',
  templateUrl: './tecnologias-edit.component.html',
  styleUrls: ['./tecnologias-edit.component.css']
})
export class TecnologiasEditComponent implements OnInit {

  id_for_delete!:number
  modalRef?: BsModalRef;

  tecnologias_list!: Tecnologia[];
  constructor(private tecnologiasService:TecnologiasService, 
    private authService:AutenticacionService,
    private router:Router,
    private modalService: BsModalService 
    ) { }

    isLogged= this.authService.logged

  ngOnInit(): void {

    this.tecnologiasService.getAll().subscribe(data =>{
      this.tecnologias_list=data;

     
    })    
  }


    
    add():void {
      
      this.router.navigate(['home/tecnologias-add'])
      
    }
  
    update(id:number){
      this.router.navigate(['home/tecnologias-update/',id])
    }


    openModal(template: TemplateRef<any>, id:number) {
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});


      this.id_for_delete=id

      console.log(this.id_for_delete)
    }


    confirm(): void {
            console.log(this.id_for_delete)
      this.tecnologiasService.delete(this.id_for_delete).subscribe();
      window.location.reload();
      this.modalRef?.hide();
    }
   
    decline(): void {
    
      this.modalRef?.hide();
    }

}
