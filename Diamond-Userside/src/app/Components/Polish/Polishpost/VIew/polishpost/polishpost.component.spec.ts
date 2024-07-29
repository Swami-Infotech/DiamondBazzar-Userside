import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishpostComponent } from './polishpost.component';

describe('PolishpostComponent', () => {
  let component: PolishpostComponent;
  let fixture: ComponentFixture<PolishpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolishpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolishpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
