import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughpostComponent } from './roughpost.component';

describe('RoughpostComponent', () => {
  let component: RoughpostComponent;
  let fixture: ComponentFixture<RoughpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoughpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoughpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
