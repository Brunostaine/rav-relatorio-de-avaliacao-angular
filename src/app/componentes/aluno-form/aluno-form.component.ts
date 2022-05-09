import { Component, OnInit } from '@angular/core';
import { AlunoFormService } from './aluno-form.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  alunoForms = []

  constructor(private alunoFormService: AlunoFormService) { }

  ngOnInit(): void {
    this.alunoFormService.buscarFormulario().subscribe({
      next: (resp) => {
        console.log(resp)
        
      },
    });

    
  }

}
