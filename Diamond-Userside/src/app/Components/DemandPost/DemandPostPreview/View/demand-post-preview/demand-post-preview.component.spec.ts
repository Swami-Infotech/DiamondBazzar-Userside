import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPostPreviewComponent } from './demand-post-preview.component';

describe('DemandPostPreviewComponent', () => {
  let component: DemandPostPreviewComponent;
  let fixture: ComponentFixture<DemandPostPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandPostPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
