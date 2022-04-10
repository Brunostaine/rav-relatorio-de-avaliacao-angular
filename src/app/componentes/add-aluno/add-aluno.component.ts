import { Component, OnInit } from '@angular/core';

import { Questoes } from '../model/questoes';
import { AddAlunoService } from './service/add-aluno.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css'],
})
export class AddAlunoComponent implements OnInit {
  listar = [];

  constructor(private addAlunoService: AddAlunoService) {
    this.addAlunoService.listarQuestoes().subscribe(result => this.listar = result)
  }

  ngOnInit(): void {
  }
}
