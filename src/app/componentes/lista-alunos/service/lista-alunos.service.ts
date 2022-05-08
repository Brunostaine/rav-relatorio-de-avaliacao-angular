import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { List } from './../../model/list';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunosService {
  private readonly API = 'http://localhost:3000/Alunos';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<List[]>(this.API)
    .pipe(
      first(),
      // delay(5000), teste do tratamento de erro
      tap())
  }

  editarAluno(){
    console.log('editando um aluno')
  }
  
}
