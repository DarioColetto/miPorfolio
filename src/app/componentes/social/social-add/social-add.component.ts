import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Social } from 'src/app/model/Social';
import { SocialService } from 'src/app/servicios/social.service';

@Component({
  selector: 'app-social-add',
  templateUrl: './social-add.component.html',
  styleUrls: ['./social-add.component.css']
})
export class SocialAddComponent implements OnInit {

  social_form = this.fb.group({
    
    nombre_social:['', Validators.required],
    url_social:['', Validators.required],
    bootstrap_class:['', Validators.required],

  })

  new_social!:Social

  constructor(private socialService:SocialService, private fb:FormBuilder,private router:Router) {}

  ngOnInit(): void {}

  onSubmit():void{
    
    this.new_social= this.social_form.value

    this.socialService.add( this.new_social).subscribe()
    this.router.navigate(["home/social-list"])
    .then(() => {
      window.location.reload();
    });
  
  }
}
