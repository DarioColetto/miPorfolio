import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Social } from 'src/app/model/Social';
import { SocialService } from 'src/app/servicios/social.service';

@Component({
  selector: 'app-social-update',
  templateUrl: './social-update.component.html',
  styleUrls: ['./social-update.component.css']
})
export class SocialUpdateComponent implements OnInit {

  id!:number;
  updated_social!:Social;


 social_form = this.fb.group({
  
        nombre_social:[],
        url_social:[],
        bootstrap_class:[],

      });

  constructor(    
    private socialService:SocialService,
    private router:Router,
    private activatedRoute: ActivatedRoute, 
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    
    
    this.socialService.get(this.id).subscribe(
      data=>{
       
       this.updated_social=data
       this.social_form.controls['nombre_social'].setValue(data.nombre_social);
       this.social_form.controls['url_social'].setValue(data.url_social);
       this.social_form.controls['bootstrap_class'].setValue(data.bootstrap_class);
       
    })

  } 


  onSubmit(){
    
    this.updated_social=this.social_form.value
    this.socialService.update(this.id, this.updated_social).subscribe()

    this.router.navigate(['home/social-list']).then(() => {
      window.location.reload();
    });



  }

}
