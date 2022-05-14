import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunoModule } from './componentes/add-aluno/add-aluno.module';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { HomeModule } from './home/home/home.module';



@NgModule({
  declarations: [AppComponent, ListaAlunosComponent],
  imports: [

    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    
    ReactiveFormsModule,
    AddAlunoModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
