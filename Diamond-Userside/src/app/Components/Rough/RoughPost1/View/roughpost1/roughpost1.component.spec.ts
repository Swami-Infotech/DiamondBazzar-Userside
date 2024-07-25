import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roughpost1Component } from './roughpost1.component';

describe('Roughpost1Component', () => {
  let component: Roughpost1Component;
  let fixture: ComponentFixture<Roughpost1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roughpost1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roughpost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
