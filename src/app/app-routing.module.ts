import { NgModule } from '@angular/core';
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
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { AgregarHabilidadComponent } from './componentes/tecnologias/agregar-habilidad/agregar-habilidad.component';
import { TecnologiasEditComponent } from './componentes/tecnologias/tecnologias-edit/tecnologias-edit.component';
import { TecnologiasUpdateComponent } from './componentes/tecnologias/tecnologias-update/tecnologias-update.component';
import { SocialListComponent } from './componentes/social/social-list/social-list.component';
import { SocialAddComponent } from './componentes/social/social-add/social-add.component';
import { SocialUpdateComponent } from './componentes/social/social-update/social-update.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';



const routes: Routes = [ 

  {path:"", redirectTo:'home/welcome' , pathMatch:"full"},
  {path:'home', component:HomeComponent, 
    children:[
    {path:'welcome', component:WelcomeComponent},

    {path:'about-update', component:EditarAboutComponent},
    
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
    {path:'add-tecnologia', component:AgregarHabilidadComponent},
    {path:'tecnologias-list', component:TecnologiasEditComponent},
    {path:'tecnologias-update/:id', component:TecnologiasUpdateComponent},

    
    {path:'social-list', component:SocialListComponent},
    {path:'social-add', component:SocialAddComponent},
    {path:'social-update/:id', component:SocialUpdateComponent},
    
    {path:'contacto', component:ContactoComponent},

    
    
  ]},
  
  {path: 'login', component:LoginComponent},

 
  


  

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
