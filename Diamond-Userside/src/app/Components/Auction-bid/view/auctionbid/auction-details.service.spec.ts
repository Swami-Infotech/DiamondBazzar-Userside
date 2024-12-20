import { TestBed } from '@angular/core/testing';

import { AuctionDetailsService } from './auction-details.service';

describe('AuctionDetailsService', () => {
  let service: AuctionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
