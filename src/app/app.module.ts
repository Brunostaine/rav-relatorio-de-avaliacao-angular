import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { HomeModule } from './home/home/home.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';

@NgModule({
  declarations: [AppComponent, ListaAlunosComponent, AddAlunoComponent],
  imports: [

    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
