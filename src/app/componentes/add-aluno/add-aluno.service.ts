import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddAlunoService {
  emitirRelatorioCriado = new EventEmitter();

  private readonly API = 'http://localhost:3000';

  constructor(private HttpClient: HttpClient) {}

  listarQuestoes() {
    return this.HttpClient.get<any>(`${this.API}/perguntas`);
  }

  listarTurmas() {
    return this.HttpClient.get<any>(`${this.API}/turmas`);
  }

  create(form: any) {
    return this.HttpClient.post<any>(`${this.API}/Alunos`, form).pipe(take(1));
  }

  radioButton() {
    
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' },
    ]

  }
}
