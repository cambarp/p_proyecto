import { TestBed } from '@angular/core/testing';

import { AgregarCompraService } from './agregar-compra.service';

describe('AgregarCompraService', () => {
  let service: AgregarCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
