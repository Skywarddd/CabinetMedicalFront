import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeplacementComponent } from './component/deplacement/deplacement.component';
import { NewDeplacementComponent } from './component/new-deplacement/new-deplacement/new-deplacement.component';
import { PatientPageComponent } from './component/patient-page/patient-page.component';
import { InfirmierComponent } from './component/infirmier/infirmier.component';
import { HeaderComponent } from './component/header/header/header.component';
import { HomePageComponent } from './component/home-page/home-page/home-page.component';
import { NewInfirmierComponent } from './component/new-infirmier/new-infirmier.component';
import { NewPatientComponent } from './component/new-patient/new-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    DeplacementComponent,
    NewDeplacementComponent,
    PatientPageComponent,
    InfirmierComponent,
    HeaderComponent,
    HomePageComponent,
    NewInfirmierComponent,
    NewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
