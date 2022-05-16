import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAlunoComponent } from './../../componentes/add-aluno/add-aluno.component';
import { AlunoFormComponent } from './../../componentes/aluno-form/aluno-form.component';
import { ListaAlunosComponent } from './../../componentes/lista-alunos/lista-alunos.component';
import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './../home/home.component';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  
  
  { path: '', component: HeaderComponent },
  { path: '', component: NavbarComponent , 
  children: [
            
            { path: 'alunos', component: ListaAlunosComponent },
            { path: 'add-aluno', component: AddAlunoComponent },
            { path: 'form', component: AddAlunoComponent },
            { path: 'edit/:id', component: AlunoFormComponent },
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
