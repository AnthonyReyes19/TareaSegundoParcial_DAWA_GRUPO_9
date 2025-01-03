import { TestBed } from '@angular/core/testing';

import { BibliotecasjsonService } from './bibliotecasjson.service';

describe('BibliotecasjsonService', () => {
  let service: BibliotecasjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecasjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
