import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAlunoComponent } from './components/info-aluno/info-aluno.component';
import { ListaDeAlunosComponent } from './components/lista-de-alunos/lista-de-alunos.component';



import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'lista-alunos',
    component: ListaDeAlunosComponent
  },
  {
    path: 'info-aluno',
    component: InfoAlunoComponent
  },
  {
    path: 'cadastro-form',
    component: CadastroFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
