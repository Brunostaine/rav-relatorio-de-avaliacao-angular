import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AddAlunoService } from './service/add-aluno.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css'],
})
export class AddAlunoComponent implements OnInit {
  listar = [] as any;
  isLoading = false;
  turmas: any ;

  constructor(private addAlunoService: AddAlunoService, private router: Router) {}

  // Formulario reativo
  formulario!: FormGroup;

  ngOnInit(): void {
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

    
    this.addAlunoService.listarTurmas().subscribe({
      next: (resp) => {
        this.turmas = resp
      }
    })
      
  }

  onGerar(){
    
  }

  onCancel(){
    this.router.navigate([''])
  }
}
