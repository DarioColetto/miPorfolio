import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/About';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  data_about:About= {
    id_about: 0,
    nombre: '',
    descripcion: '',
    foto_perfil: '',
    titulo: '',
    email: '',
    tel: ''
  }
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {

        
    this.aboutService.get(1).subscribe(data =>{
      

      this.data_about=data
    })

    }

}
