import { NavbarComponent } from './../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaAlunosModule } from './../../componentes/lista-alunos/lista-alunos.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListaAlunosModule,
    
  ],
})
export class HomeModule {}
