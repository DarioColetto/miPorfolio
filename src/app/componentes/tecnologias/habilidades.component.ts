import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';
import { Tecnologia } from 'src/app/model/Tecnologia';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';




@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
  host: { 'id': 'habilidades' }
})
export class HabilidadesComponent implements OnInit {

  tecnologiasList!: Tecnologia[];


  constructor(private tecnologiasServive: TecnologiasService, 
    private router:Router,
    private authService:AutenticacionService ) { }

    isLogged= this.authService.logged


  add_habilidad(){

    this.router.navigate(["home/add-tecnologia"])
    


  }


  ngOnInit(): void {

    this.tecnologiasServive.getAll().subscribe(data => {
      this.tecnologiasList = data;

      console.log(data)
      let tecnologias_nombres = this.tecnologiasList.map(tecnologia => tecnologia.nombre_tecnologia)
      let tenologias_nivel =  this.tecnologiasList.map(tecnologia => tecnologia.nivel)

      const lenguajes = new Chart("lenguajesChart", {
        type: 'bar',
        data: {
          labels: tecnologias_nombres,
          datasets: [{
            
            label: "Nivel",
            data: tenologias_nivel,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(80, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(80, 162, 235, 1)',
            ],
            borderWidth: 1,
            borderRadius:10,
            
          }]
        },
        options: {
          indexAxis:'y',
          scales: {
            
            x2: {
              type: "linear",
              min: 1,
              max: 10,
              display:false
            },
            x: {
              type: 'category',
              labels: ['Principiante', 'Medio', 'Avanzado', 'Experto'],

              position: 'left',
              stack: 'demo',
              stackWeight: 1,
              reverse:false
            },
          },

          plugins: {
            legend: {
              display: false
            }
          }

        },

      });
    })

  }

}

