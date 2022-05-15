import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunoModule } from './componentes/add-aluno/add-aluno.module';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { HomeModule } from './pages/home/home.module';
import { NavbarComponent } from './pages/navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, ListaAlunosComponent, NavbarComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    ReactiveFormsModule,
    AddAlunoModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
