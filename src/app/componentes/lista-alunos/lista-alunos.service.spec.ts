import { TestBed } from '@angular/core/testing';

import { ListaAlunosService } from './lista-alunos.service';

describe('ListaAlunosService', () => {
  let service: ListaAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
