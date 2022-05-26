import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormacionComponent } from './componentes/formacion/formacion.component'; 
import { AgregarFormacionComponent } from './componentes//formacion/agregar-formacion/agregar-formacion.component';
import { EditarformacionComponent } from './componentes//formacion/editarformacion/editarformacion.component';
import { ProyectosComponent } from './componentes//proyectos/proyectos.component';
import { AgregarProyectoComponent } from './componentes/proyectos/agregar-proyecto/agregar-proyecto.component'; 
import { EditarproyectoComponent } from './componentes//proyectos/editar-proyecto/editarproyecto.component'; 
import { EditarAboutComponent } from './componentes/header/editar-about/editar-about.component'; 
import { LoginComponent } from './componentes//login/login.component';
import { HabilidadesComponent } from './componentes/tecnologias/habilidades.component';
import { MyHeaderComponent } from './componentes/header/myheader.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';



const routes: Routes = [ 

  
  {path:'formacion', component:FormacionComponent},
  {path:'formacion-add', component:AgregarFormacionComponent},
  {path:'formacion-update/:id', component:EditarformacionComponent},
  
  {path:'proyectos', component:ProyectosComponent},
  {path: 'proyecto-add', component:AgregarProyectoComponent},
  {path:'proyecto-update/:id', component:EditarproyectoComponent},
  
  
  {path:'experiencia', component:ExperienciaComponent},
  {path:'experiencia-add', component:AgregarExperienciaComponent},
  {path:'experiencia-update/:id', component:EditarExperienciaComponent},

  {path:'tecnologias', component:HabilidadesComponent},
  {path:'home', component:HomeComponent},
  
  {path: 'login', component:LoginComponent},
 
  {path:'header', component:MyHeaderComponent}, // Este no vaaa creo


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
useHash:true,
anchorScrolling:'enabled'
  })
],
  exports: [RouterModule]
})


export class AppRoutingModule { }
