import { TestBed } from '@angular/core/testing';

import { TopsearchService } from './topsearch.service';

describe('TopsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopsearchService = TestBed.get(TopsearchService);
    expect(service).toBeTruthy();
  });
});
