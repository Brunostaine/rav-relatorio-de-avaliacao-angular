import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddAlunoService {
  private readonly API = 'http://localhost:3000/perguntas';
  private readonly TURMA = 'http://localhost:3000/turmas';
  private readonly FORM = 'http://localhost:3000/Alunos';

  constructor(private HttpClient: HttpClient) {}

  listarQuestoes() {
    return this.HttpClient.get<any>(this.API);
  }

  listarTurmas(){
    return this.HttpClient.get<any>(this.TURMA)
  }

  SubmitFormulario(form: any){
    return this.HttpClient.post<any>(this.FORM, form).pipe(take(1))
  }
}
