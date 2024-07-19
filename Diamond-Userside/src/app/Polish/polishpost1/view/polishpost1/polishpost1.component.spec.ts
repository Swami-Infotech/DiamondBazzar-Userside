import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polishpost1Component } from './polishpost1.component';

describe('Polishpost1Component', () => {
  let component: Polishpost1Component;
  let fixture: ComponentFixture<Polishpost1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Polishpost1Component]
    });
    fixture = TestBed.createComponent(Polishpost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
