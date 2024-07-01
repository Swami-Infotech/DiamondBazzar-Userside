import { TestBed } from '@angular/core/testing';

import { DiamnodbazzarService } from './diamnodbazzar.service';

describe('DiamnodbazzarService', () => {
  let service: DiamnodbazzarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiamnodbazzarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
