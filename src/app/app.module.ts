import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // para usar o serviço
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
