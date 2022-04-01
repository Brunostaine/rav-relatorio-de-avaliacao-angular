import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {
  users: Array<User> = []; // Variável tipada com meu array de User da interface criada

  constructor (private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.UserService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  deleteUser(id: number): void {
    this.UserService.deleteUser(id).subscribe( response => {
      console.log('Usuario excluido com sucesso!')
    }, () => {
      this.getUsers()
    })
  }

}
