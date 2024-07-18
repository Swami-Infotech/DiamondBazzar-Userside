import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishpostComponent } from './polishpost.component';

describe('PolishpostComponent', () => {
  let component: PolishpostComponent;
  let fixture: ComponentFixture<PolishpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolishpostComponent]
    });
    fixture = TestBed.createComponent(PolishpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
