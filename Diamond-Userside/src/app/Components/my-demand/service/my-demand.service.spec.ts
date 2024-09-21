import { TestBed } from '@angular/core/testing';

import { MyDemandService } from './my-demand.service';

describe('MyDemandService', () => {
  let service: MyDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
