import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddAlunoService {
  private readonly API = 'assets/db.json';
  private readonly TURMA = 'assets/turmas.json';
  private readonly FORM = 'assets/list.json';

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
