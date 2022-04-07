import { HomeModule } from './home/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';


@NgModule({
  declarations: [AppComponent, ListaAlunosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // para usar o serviço

    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
