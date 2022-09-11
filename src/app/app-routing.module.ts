import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeplacementComponent } from './component/deplacement/deplacement.component';
import { HomePageComponent } from './component/home-page/home-page/home-page.component';
import { InfirmierComponent } from './component/infirmier/infirmier.component';
import { NewDeplacementComponent } from './component/new-deplacement/new-deplacement/new-deplacement.component';
import { NewInfirmierComponent } from './component/new-infirmier/new-infirmier.component';
import { NewPatientComponent } from './component/new-patient/new-patient.component';
import { PatientPageComponent } from './component/patient-page/patient-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'infirmier', component: InfirmierComponent},
  { path: 'infirmier/create', component: NewInfirmierComponent},
  { path: 'patient', component: PatientPageComponent},
  { path: 'patient/create', component: NewPatientComponent},
  { path: 'deplacement', component: DeplacementComponent},
  { path: 'deplacement/create', component: NewDeplacementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
