import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ultimos30DiasComponent } from './pages/ultimos-30-dias/ultimos-30-dias.component';
import { TestePrecoComponent } from './shared/teste-preco/teste-preco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCadastradosComponent } from './shared/form-cadastrados/form-cadastrados.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './shared/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    Ultimos30DiasComponent,
    TestePrecoComponent,
    FormCadastradosComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
