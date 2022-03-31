import { User } from 'src/app/models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-aluno',
  templateUrl: './info-aluno.component.html',
  styleUrls: ['./info-aluno.component.css']
})
export class InfoAlunoComponent implements OnInit {
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

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUsers(this.userForm.value).subscribe(result => {
      alert(`Usuário ${result.nomeAluno} foi cadastrado com sucesso!`)
    })
  }

}
