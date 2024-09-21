import { TestBed } from '@angular/core/testing';

import { MyDiamondService } from './my-diamond.service';

describe('MyDiamondService', () => {
  let service: MyDiamondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDiamondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
