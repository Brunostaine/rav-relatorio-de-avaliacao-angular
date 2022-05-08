import { Component, OnInit } from '@angular/core';

import { ListaAlunosService } from './service/lista-alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css'],
})
export class ListaAlunosComponent implements OnInit {
  listar: any;

  constructor(private listaAlunosService: ListaAlunosService) {}

  ngOnInit(): void {
    this.listaAlunosService.list().subscribe({
      next: (resp) => {
        this.listar = resp;
        // console.log(resp)
      },
    });
  }
}
