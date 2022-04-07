import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent,
  children: [
    {path: '', component: ListaAlunosComponent}
  ]
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
