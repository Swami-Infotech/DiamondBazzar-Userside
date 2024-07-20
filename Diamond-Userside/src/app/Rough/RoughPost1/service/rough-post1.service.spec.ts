import { TestBed } from '@angular/core/testing';

import { RoughPost1Service } from './rough-post1.service';

describe('RoughPost1Service', () => {
  let service: RoughPost1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoughPost1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
