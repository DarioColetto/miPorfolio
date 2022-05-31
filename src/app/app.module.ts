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
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TecnologiasEditComponent } from './componentes/tecnologias/tecnologias-edit/tecnologias-edit.component';
import { TecnologiasUpdateComponent } from './componentes/tecnologias/tecnologias-update/tecnologias-update.component';
import { SocialAddComponent } from './componentes/social/social-add/social-add.component';
import { SocialListComponent } from './componentes/social/social-list/social-list.component';
import { SocialUpdateComponent } from './componentes/social/social-update/social-update.component';




//https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/


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
    WelcomeComponent,
    ContactoComponent,
    TecnologiasEditComponent,
    TecnologiasUpdateComponent,
    SocialAddComponent,
    SocialListComponent,
    SocialUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    ModalModule.forRoot()

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
