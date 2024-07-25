import { TestBed } from '@angular/core/testing';

import { PolishpostService } from './polishpost.service';

describe('PolishpostService', () => {
  let service: PolishpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolishpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
