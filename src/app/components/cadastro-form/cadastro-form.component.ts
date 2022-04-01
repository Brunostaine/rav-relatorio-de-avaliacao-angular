import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = ''

  constructor(private fb: FormBuilder, private userService: UserService, private actRoute: ActivatedRoute, private router: Router) { 
    this.userForm = this.fb.group({
      id: 0,
      nomeAluno: '',
      p1: '',
      p2: ''
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId)
      if(this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
              id: result[0].id,
              nomeAluno: result[0].nomeAluno,
              p1: result[0].p1,
              p2: result[0].p2
          })
        })
      }
    })
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
    this.userService.postUsers(this.userForm.value).subscribe( result => {
      alert('Cadastrado com sucesso !'), result
    })
  }

  editUser() {
    this.userService.editUser(this.userId, this.userForm.value).subscribe(result => {
      result
    }, () => {
      this.router.navigate(['/'])
    })
  }


  actionButton() {
    if(this.userId !== null) {
      this.editUser()
    } else {
      this.createUser()
    }
  }
}
