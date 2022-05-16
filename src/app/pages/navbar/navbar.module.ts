import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './../home/home.component';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, HeaderComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule { }
