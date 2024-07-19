import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughPostPreviewComponent } from './rough-post-preview.component';

describe('RoughPostPreviewComponent', () => {
  let component: RoughPostPreviewComponent;
  let fixture: ComponentFixture<RoughPostPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoughPostPreviewComponent]
    });
    fixture = TestBed.createComponent(RoughPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
