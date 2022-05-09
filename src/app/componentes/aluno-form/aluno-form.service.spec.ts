import { TestBed } from '@angular/core/testing';

import { AlunoFormService } from './aluno-form.service';

describe('AlunoFormService', () => {
  let service: AlunoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
