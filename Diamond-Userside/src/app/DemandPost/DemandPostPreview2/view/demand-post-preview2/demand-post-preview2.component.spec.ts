import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPostPreview2Component } from './demand-post-preview2.component';

describe('DemandPostPreview2Component', () => {
  let component: DemandPostPreview2Component;
  let fixture: ComponentFixture<DemandPostPreview2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandPostPreview2Component]
    });
    fixture = TestBed.createComponent(DemandPostPreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
