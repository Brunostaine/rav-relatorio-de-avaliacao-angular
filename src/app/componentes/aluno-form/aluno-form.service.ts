import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoFormService {

  private readonly FORM = 'http://localhost:3000/Alunos';

  constructor(private http: HttpClient) { }

  buscarFormulario(){
    // precisa do id pra colocar 
    return this.http.get<any>(`${this.FORM}`)
  }
}
