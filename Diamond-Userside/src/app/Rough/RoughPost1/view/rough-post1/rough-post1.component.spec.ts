import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughPost1Component } from './rough-post1.component';

describe('RoughPost1Component', () => {
  let component: RoughPost1Component;
  let fixture: ComponentFixture<RoughPost1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoughPost1Component]
    });
    fixture = TestBed.createComponent(RoughPost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
