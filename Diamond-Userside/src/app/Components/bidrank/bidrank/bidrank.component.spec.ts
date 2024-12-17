import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidrankComponent } from './bidrank.component';

describe('BidrankComponent', () => {
  let component: BidrankComponent;
  let fixture: ComponentFixture<BidrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidrankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
