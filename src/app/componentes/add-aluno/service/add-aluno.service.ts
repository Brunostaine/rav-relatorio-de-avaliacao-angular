import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddAlunoService {
  private readonly API = 'assets/db.json';

  constructor(private HttpClient: HttpClient) {}

  listarQuestoes() {
    return this.HttpClient.get<any>(this.API);
  }
}
