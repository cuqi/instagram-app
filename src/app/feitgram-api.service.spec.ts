import { TestBed } from '@angular/core/testing';

import { FeitgramApiService } from './feitgram-api.service';

describe('FeitgramApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeitgramApiService = TestBed.get(FeitgramApiService);
    expect(service).toBeTruthy();
  });
});
