import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Social } from 'src/app/model/Social';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SocialService } from 'src/app/servicios/social.service';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.css']
})
export class SocialListComponent implements OnInit {

  id_for_delete!:number
  modalRef?: BsModalRef;

  social_list!: Social[];
  constructor(private socialService:SocialService, 
    private authService:AutenticacionService,
    private router:Router,
    private modalService: BsModalService 
    ) { }

    isLogged= this.authService.logged

  ngOnInit(): void {

    this.socialService.getAll().subscribe(data =>{
      this.social_list=data;

     
    })    
  }


    
    add():void {
      
      this.router.navigate(['home/social-add'])
      
    }
  
    update(id:number){
      this.router.navigate(['home/social-update/',id])
    }


    openModal(template: TemplateRef<any>, id:number) {
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});


      this.id_for_delete=id

      console.log(this.id_for_delete)
    }


    confirm(): void {
            console.log(this.id_for_delete)
      this.socialService.delete(this.id_for_delete).subscribe();
      window.location.reload();
      this.modalRef?.hide();
    }
   
    decline(): void {
    
      this.modalRef?.hide();
    }
}
