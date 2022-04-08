import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { List } from './../../model/list';

@Injectable({
  providedIn: 'root',
})
export class ListaAlunosService {
  private readonly API = 'assets/list.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<List[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(list => console.log(list)))
  }
}
