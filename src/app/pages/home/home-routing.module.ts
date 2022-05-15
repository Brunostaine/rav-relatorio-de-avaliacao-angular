import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlunoComponent } from 'src/app/componentes/add-aluno/add-aluno.component';
import { AlunoFormComponent } from 'src/app/componentes/aluno-form/aluno-form.component';
import { ListaAlunosComponent } from 'src/app/componentes/lista-alunos/lista-alunos.component';

import { NavbarComponent } from '../navbar/navbar.component';

const routes: Routes = [
    {path: '', component: NavbarComponent,
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
export class HomeRoutingModule { }
