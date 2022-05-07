import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunoModule } from './componentes/add-aluno/add-aluno.module';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { HomeModule } from './home/home/home.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';

@NgModule({
  declarations: [AppComponent, ListaAlunosComponent, ],
  imports: [

    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AddAlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
