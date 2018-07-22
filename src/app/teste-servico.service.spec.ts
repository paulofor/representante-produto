import { TestBed, inject } from '@angular/core/testing';

import { TesteServicoService } from './teste-servico.service';

describe('TesteServicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteServicoService]
    });
  });

  it('should be created', inject([TesteServicoService], (service: TesteServicoService) => {
    expect(service).toBeTruthy();
  }));
});
