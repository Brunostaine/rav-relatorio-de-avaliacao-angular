import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunosService {

  
  private readonly API = 'http://localhost:3000';

  private id = this

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}



  list() {
    return this.httpClient.get<any>(`${this.API}/Alunos`)
  }

  listarPerguntas(){
    return this.httpClient.get<any>(`${this.API}/perguntas`)
  }

  editarAluno(){
    console.log('editando um aluno')
  }

  onAtualiza() {
    this.list()
  }

  

  deletarRelatorio(id: any){
    // Preciso colocar o id dinamico para poder excluir 
    this.httpClient.delete<any>(`${this.API}/Alunos/${id}`  ).subscribe({
      next: (resp) => {
        console.log(resp) 
        alert('Curso excluido com sucesso')
        
      },
      error: ()=> {
        alert('Erro ao remover curso, tente mais tarde.')
      }
    })
    
  }

  
}
