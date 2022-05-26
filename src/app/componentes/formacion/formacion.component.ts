import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Formacion } from 'src/app/model/Formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
  host:{'id':"formacion"}
})
export class FormacionComponent implements OnInit {

  formaciones!: Formacion[];
  id:number=0


  constructor(private formacionService: FormacionService, private viewportScroller: ViewportScroller,
    private router:Router  ) { }

  ngOnInit(): void {



    this.formacionService.getAll().subscribe(dataForm => {

      this.formaciones = dataForm

      console.log(dataForm)

    });
  }



  add():void {

    this.router.navigate(['formacion-add'])
    
    this.viewportScroller.scrollToAnchor('formacion');
    }


  update(id:number){
    this.router.navigate(['formacion-update/',id])
  }

  
  del(id: number) {

    this.formacionService.delete(id).subscribe(resp => {

      console.log(resp);
      this.ngOnInit()

    });

  }


}
