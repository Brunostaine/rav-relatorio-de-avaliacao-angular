import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunosService {
  private readonly API = 'http://localhost:3000/Alunos';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<any>(this.API)
  }

  editarAluno(){
    console.log('editando um aluno')
  }
  
}
