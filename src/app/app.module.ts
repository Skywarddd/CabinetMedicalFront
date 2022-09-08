import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DeplacementComponent } from './component/deplacement/deplacement.component';
import { NewDeplacementComponent } from './component/new-deplacement/new-deplacement/new-deplacement.component';

@NgModule({
  declarations: [
    AppComponent,
    DeplacementComponent,
    NewDeplacementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
