import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, AppMaterialModule, SharedModule, HttpClientModule],
})
export class ListaAlunosModule {}
