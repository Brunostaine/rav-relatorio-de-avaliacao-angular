import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Questoes } from '../../model/questoes';

@Injectable({
  providedIn: 'root',
})
export class AddAlunoService {
  private readonly API = 'assets/db.json';

  constructor(private HttpClient: HttpClient) {}

  listarQuestoes() {
    return this.HttpClient.get<Questoes[]>(this.API);
  }
}
