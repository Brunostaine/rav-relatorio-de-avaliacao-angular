import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];


  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.userForm = this.fb.group({
      id: 0,
      nomeAluno: '',
      p1: '',
      p2: '',
    })
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response
    })
  }

  // Cria e cadastra o formulário do aluno.
  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUsers(this.userForm.value).subscribe(result => {
      alert('Aluno e formulário Cadastrado com sucesso!')
    })
  }

}
