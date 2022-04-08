import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaAlunosModule } from './../../componentes/lista-alunos/lista-alunos.module';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListaAlunosModule,
    AppMaterialModule
  ],
})
export class HomeModule {}
