import { TestBed } from '@angular/core/testing';

import { AddDemandService } from './add-demand.service';

describe('AddDemandService', () => {
  let service: AddDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
