import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';

import { HabilidadesComponent } from './componentes/tecnologias/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { AgregarFormacionComponent } from './componentes/formacion/agregar-formacion/agregar-formacion.component';
import { EditarformacionComponent } from './componentes/formacion/editarformacion/editarformacion.component';

import { AgregarProyectoComponent } from './componentes/proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarproyectoComponent } from './componentes/proyectos/editar-proyecto/editarproyecto.component';
import { EditarAboutComponent } from './componentes/header/editar-about/editar-about.component';
import { NgChartsModule } from 'ng2-charts';
import { MyHeaderComponent } from './componentes/header/myheader.component';
import { SocialComponent } from './componentes/social/social.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component'; 
import { AgregarHabilidadComponent } from './componentes/tecnologias/agregar-habilidad/agregar-habilidad.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';







@NgModule({
  declarations: [
    AppComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    MyHeaderComponent,

    AgregarFormacionComponent,
    EditarformacionComponent,
    AgregarProyectoComponent,
    EditarproyectoComponent,
    EditarAboutComponent,
    LoginComponent,
    SocialComponent,
    ExperienciaComponent,
    EditarExperienciaComponent,
    AgregarHabilidadComponent,
    AgregarExperienciaComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
