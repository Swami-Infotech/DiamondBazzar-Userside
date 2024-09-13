import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishshapComponent } from './polishshap.component';

describe('PolishshapComponent', () => {
  let component: PolishshapComponent;
  let fixture: ComponentFixture<PolishshapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolishshapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolishshapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
