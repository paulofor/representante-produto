import { TestBed, inject } from '@angular/core/testing';

import { PaginaValidacaoWebServiceService } from './pagina-validacao-web-service.service';

describe('PaginaValidacaoWebServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginaValidacaoWebServiceService]
    });
  });

  it('should be created', inject([PaginaValidacaoWebServiceService], (service: PaginaValidacaoWebServiceService) => {
    expect(service).toBeTruthy();
  }));
});
