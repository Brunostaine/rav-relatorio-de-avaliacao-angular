import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AddAlunoService } from '../add-aluno/service/add-aluno.service';
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

  formulario = FormGroup;

  constructor(
    private alunoFormService: AlunoFormService,
    private addAlunoService: AddAlunoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.alunoFormService.buscarFormulario().subscribe({
      next: (resp) => {
        // console.log(resp)
      },
    });

    

    this.addAlunoService.emitirRelatorioCriado.subscribe(
      (this.listar = console.log(this.formulario))
    );
  }

  onSubmit() {
    // console.log(this.form);
  }
}
