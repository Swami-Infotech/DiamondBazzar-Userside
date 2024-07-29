import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPostComponent } from './demand-post.component';

describe('DemandPostComponent', () => {
  let component: DemandPostComponent;
  let fixture: ComponentFixture<DemandPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
