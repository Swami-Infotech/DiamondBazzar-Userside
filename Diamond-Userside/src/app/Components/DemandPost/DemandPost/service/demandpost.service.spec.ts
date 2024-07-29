import { TestBed } from '@angular/core/testing';

import { DemandpostService } from './demandpost.service';

describe('DemandpostService', () => {
  let service: DemandpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
