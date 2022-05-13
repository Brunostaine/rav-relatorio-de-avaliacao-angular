import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AddAlunoService } from './add-aluno.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css'],
})
export class AddAlunoComponent implements OnInit {
  listarPerguntas: any = [];

  turmas: any = [];
  // Formulario reativo
  // formulario!: FormGroup;
  formulario!: FormGroup;
  // mostrar mensagem de carregamento
  isLoading = false;
  // Radio button dinamico
  radioButtonOpcoes: any = [];

  constructor(
    private addAlunoService: AddAlunoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  // buildOption(){
  //   const value = this.radioButtonOpcoes.map(v => new FormControl(false))
  // }

  ngOnInit(): void {
    // Formulario
    this.formulario = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      turma: [null, [Validators.required]],
      perguntas: [null, [Validators.required]],
    });

    // console.log(this.formulario);

    // Radio button opções

    this.radioButtonOpcoes = this.addAlunoService.radioButton();
    // console.log(this.radioButtonOpcoes);

    // Lista as perguntas
    this.isLoading = true;
    this.addAlunoService.listarQuestoes().subscribe({
      next: (resp) => {
        this.listarPerguntas = resp;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      },
    });

    // Lista as turmas
    this.addAlunoService.listarTurmas().subscribe({
      next: (resp) => {
        this.turmas = resp;
        // console.log(resp)
      },
    });
  }

  onSubmit() {
    // console.log(this.formulario.value);

    if (
      this.formulario.valid &&
      this.formulario.touched &&
      this.formulario.value.turma !== 'Selecione uma turma'
    ) 
    {
      this.addAlunoService.create(this.formulario.value).subscribe({
        next: () => {
          alert('Foi adicionado um novo relatório');
        },
        error: (erro) => {
          alert(erro);
        },
      });
      this.router.navigate(['']);
    } else {
      alert('Seu relatório possui informações inválidas, tente novamente.');

      this.listarPerguntas();
    }

    this.addAlunoService.emitirRelatorioCriado.subscribe(
      (this.listarPerguntas = this.formulario)
    );
  }

  onCancel(): void {
    this.router.navigate(['']);
  }
}
