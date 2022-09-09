import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeplacementComponent } from './component/deplacement/deplacement.component';
import { NewDeplacementComponent } from './component/new-deplacement/new-deplacement/new-deplacement.component';

const routes: Routes = [
  { path: 'deplacement', component: DeplacementComponent},
  { path: 'deplacement/create', component: NewDeplacementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
