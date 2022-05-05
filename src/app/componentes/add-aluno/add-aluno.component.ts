import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private addAlunoService: AddAlunoService, private router: Router) {}

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
  }

  onCancel(){
    this.router.navigate([''])
  }
}
