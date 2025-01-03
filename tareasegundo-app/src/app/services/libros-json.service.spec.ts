import { TestBed } from '@angular/core/testing';

import { LibrosJsonService } from './libros-json.service';

describe('LibrosJsonService', () => {
  let service: LibrosJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
