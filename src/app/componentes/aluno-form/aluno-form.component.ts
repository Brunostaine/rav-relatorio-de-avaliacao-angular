import { Component, OnInit } from '@angular/core';

import { ListForm } from './aluno-form';
import { AlunoFormService } from './aluno-form.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit {
  form!: ListForm;

  listar: any = [];

  constructor(
    private alunoFormService: AlunoFormService,
    
  ) {}

  ngOnInit(): void {
    
  }

  
}
