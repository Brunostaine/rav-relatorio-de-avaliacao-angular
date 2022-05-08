import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AddAlunoService } from './service/add-aluno.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css'],
})
export class AddAlunoComponent implements OnInit {

  listar = [] as any;
  isLoading = false;
  turmas: any;

  constructor(
    private addAlunoService: AddAlunoService,
    private router: Router,
    private fb: FormBuilder,
    
  ) {}

  // Formulario reativo
  formulario!: FormGroup;

  ngOnInit(): void {
    // Formulario

    this.formulario = this.fb.group({
      nome: [null],
      turma: [null],

      
    })

    // Lista as questões
    this.isLoading = true;
    this.addAlunoService.listarQuestoes().subscribe({
      next: (resp) => {
        this.listar = resp;
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
      },
    });
  }

  onSubmit() {
    console.log(this.formulario.value)

    this.addAlunoService.SubmitFormulario(this.formulario.value).subscribe()
  }
  

  onCancel(): void {
    this.router.navigate(['']);
  }
}
