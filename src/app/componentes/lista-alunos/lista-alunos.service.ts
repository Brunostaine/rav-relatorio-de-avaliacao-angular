import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunosService {
  private readonly API = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
    
  ) {}

  list() {
    return this.httpClient.get<any>(`${this.API}/Alunos/`);
  }

  editarFormulario(id: any) {
    return this.httpClient.get<any>(`${this.API}/alunos/${id}`)
  }

  listarPerguntas() {
    return this.httpClient.get<any>(`${this.API}/perguntas`);
  }

  deletarRelatorio(id: any) {
    // Preciso colocar o id dinamico para poder excluir
    this.httpClient.delete<any>(`${this.API}/Alunos/${id}`).subscribe({
      next: (resp) => {
        // console.log(resp)
        alert('Curso excluido com sucesso');
      },
      error: () => {
        alert('Erro ao remover curso, tente mais tarde.');
      },
    });
  }
}
