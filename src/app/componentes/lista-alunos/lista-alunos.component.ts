import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListaAlunosService } from './lista-alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css'],
})
export class ListaAlunosComponent implements OnInit {
  listar: any = [];
  perguntas: any = [];

  formularioAluno: any = [];

  constructor(
    private listaAlunosService: ListaAlunosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listaAlunosService.list().subscribe({
      next: (resp) => {
        this.listar = resp;
        // console.log(resp)
      },
    });

    this.listaAlunosService.listarPerguntas().subscribe({
      next: (resp) => {
        this.perguntas = resp;
        // console.log(resp)
      },
    });
  }

  verRelatorio(id: any) {
    this.router.navigate(['edit', id]);

    this.listaAlunosService.editarFormulario(id).subscribe({
      next: (resposta) => {
        console.log(resposta);
        this.formularioAluno = resposta;
      },
    });
  }

  deleteRelatorio(id: any) {
    this.listaAlunosService.deletarRelatorio(id);
    this.listaAlunosService.list().subscribe({
      next: (resp) => {
        this.listar = resp;
      },
    });

    // console.log("To pegando o lista: ",id)
  }
}
