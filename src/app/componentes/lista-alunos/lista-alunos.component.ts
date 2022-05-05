import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/componentes/error-dialog/error-dialog.component';
import { List } from './../model/list';
import { ListaAlunosService } from './service/lista-alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  list$: Observable<List[]>
  displayedColumns = ['name', 'course']

  constructor(
    private listaAlunosService: ListaAlunosService,
    public dialog: MatDialog) 
    {this.list$ = this.listaAlunosService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar lista de alunos')
          return of([])
        })
        )}

   

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  edit(){
    this.listaAlunosService.editarAluno()
  }

  ngOnInit(): void {
  }

}
