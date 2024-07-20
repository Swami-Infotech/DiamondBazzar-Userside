import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPostComponent } from './demand-post.component';

describe('DemandPostComponent', () => {
  let component: DemandPostComponent;
  let fixture: ComponentFixture<DemandPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandPostComponent]
    });
    fixture = TestBed.createComponent(DemandPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
