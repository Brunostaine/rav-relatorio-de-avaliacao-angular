import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { AddAlunoComponent } from './add-aluno.component';



@NgModule({
  declarations: [
    AddAlunoComponent, 
  ],
  imports: [
    CommonModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AddAlunoModule { }
