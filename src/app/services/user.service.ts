import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'https://sheet.best/api/sheets/973d3207-fce8-4150-b4c3-a7fea45bad62'
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
      
    })
  }

  constructor(private HttpClient: HttpClient) { }

  //retorna lista de usuários 
  getUsers():Observable<User[]> {
    return this.HttpClient.get<User[]>(this.API)
  }

  // Salva um novo usuario
  postUsers(user: User): Observable<User> {
    return this.HttpClient.post<User>(this.API, user, this.httpOptions)
  }

  // deleta usuario 
  deleteUser(id: number): Observable<User> {
    return this.HttpClient.delete<User>(`${this.API}/id/${id}`)
  }

  // Edita usuário 
  editUser(id: string, user: User): Observable<User> {
    return this.HttpClient.put<User>(`${this.API}/id/${id}`, user, this.httpOptions)
  }

  // Lista usuário para edição
  getUser(id: string): Observable<User[]> {
    return this.HttpClient.get<User[]>(`${this.API}/id/${id}`)
  }
}
