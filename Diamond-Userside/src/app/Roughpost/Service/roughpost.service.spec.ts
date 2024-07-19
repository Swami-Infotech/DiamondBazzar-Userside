import { TestBed } from '@angular/core/testing';

import { RoughpostService } from './roughpost.service';

describe('RoughpostService', () => {
  let service: RoughpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoughpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
