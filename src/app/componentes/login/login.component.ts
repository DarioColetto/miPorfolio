import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { IResponse } from 'src/app/model/Iresponse';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User!: User;
  login_form!: FormGroup;
  validation:boolean = false
  

  constructor(private fb: FormBuilder, private autenticationService: AutenticacionService, private router: Router) { }

  initForm(): FormGroup {



    return this.login_form = this.fb.group({

      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]


    })
  }



  ngOnInit(): void {

    this.login_form = this.initForm();
  }

  //Metdos para validar los campos en el fomulario.
  get Username() {
    return this.login_form.get("username")
  }

  get Email() {
    return this.login_form.get("email");
  }

  get Password() {
    return this.login_form.get('password');
  }

  onSubmit() {

    

    this.User = this.login_form.value;

    this.autenticationService.login(this.User).subscribe(resp => {
        
      if (resp.response === ""){
        
        this.validation = true
        
      
      } 
      else{
        
        this.validation = false
        localStorage.setItem('token', resp.response)

        this.router.navigate(['home/welcome'])
        .then(() => {
          window.location.reload();
        })
        console.log("bienvenido")
      }


  
    }) 


  }


}
