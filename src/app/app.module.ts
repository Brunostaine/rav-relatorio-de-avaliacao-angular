import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ListaDeAlunosComponent } from './components/lista-de-alunos/lista-de-alunos.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    ListaDeAlunosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
