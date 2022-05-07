import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { AddAlunoComponent } from './add-aluno.component';



@NgModule({
  declarations: [
    AddAlunoComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class AddAlunoModule { }
