import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunoModule } from './componentes/add-aluno/add-aluno.module';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { SharedModule } from './componentes/shared/shared.module';
import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [AppComponent, ListaAlunosComponent,  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    
    HomeModule,
    AddAlunoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
