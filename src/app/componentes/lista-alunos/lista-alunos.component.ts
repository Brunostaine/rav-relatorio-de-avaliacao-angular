import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListaAlunosService } from './service/lista-alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css'],
})
export class ListaAlunosComponent implements OnInit {
  listar: any;

  constructor(private listaAlunosService: ListaAlunosService, private router: Router) {}

  ngOnInit(): void {
    this.listaAlunosService.list().subscribe({
      next: (resp) => {
        this.listar = resp;
        // console.log(resp)
      },
    });
  }

  verRelatorio(){
    this.router.navigate(['/form'])
  }

  deleteRelatorio(){
    this.listaAlunosService.deletarRelatorio()
  }
}
