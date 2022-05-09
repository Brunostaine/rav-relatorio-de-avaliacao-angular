import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunosService {
  private readonly API = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<any>(`${this.API}/Alunos`)
  }

  editarAluno(){
    console.log('editando um aluno')
  }

  deletarRelatorio(){
    // Preciso colocar o id dinamico para poder excluir 
    this.httpClient.delete<any>(`${this.API}/`).subscribe({
      next: (resp) => {
        console.log(resp)
      }
    })
    
  }

  
}
