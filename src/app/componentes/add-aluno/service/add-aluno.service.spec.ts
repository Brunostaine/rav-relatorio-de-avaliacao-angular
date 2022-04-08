import { TestBed } from '@angular/core/testing';

import { AddAlunoService } from './add-aluno.service';

describe('AddAlunoService', () => {
  let service: AddAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
