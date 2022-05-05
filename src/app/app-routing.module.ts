import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlunoComponent } from './componentes/add-aluno/add-aluno.component';

const routes: Routes = [
    {path: '', component: HomeComponent,
  children: [
    {path: '', component: ListaAlunosComponent},
    
    {path: 'add-aluno', component: AddAlunoComponent}
  ]
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
