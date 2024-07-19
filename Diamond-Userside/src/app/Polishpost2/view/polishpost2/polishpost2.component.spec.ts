import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polishpost2Component } from './polishpost2.component';

describe('Polishpost2Component', () => {
  let component: Polishpost2Component;
  let fixture: ComponentFixture<Polishpost2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Polishpost2Component]
    });
    fixture = TestBed.createComponent(Polishpost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
