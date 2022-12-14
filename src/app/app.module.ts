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

@NgModule({
  declarations: [
    AppComponent,
    DeplacementComponent,
    NewDeplacementComponent,
    PatientPageComponent,
    InfirmierComponent
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
