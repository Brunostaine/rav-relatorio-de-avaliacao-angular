import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';
import { AlunoFormComponent } from './componentes/aluno-form/aluno-form.component';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
