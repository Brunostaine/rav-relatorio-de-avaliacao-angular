import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ListaDeAlunosComponent } from './components/lista-de-alunos/lista-de-alunos.component';
import { InfoAlunoComponent } from './components/info-aluno/info-aluno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    ListaDeAlunosComponent,
    InfoAlunoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // para usar o serviço
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
