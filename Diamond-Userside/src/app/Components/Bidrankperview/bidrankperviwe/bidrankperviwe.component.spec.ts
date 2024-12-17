import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidrankperviweComponent } from './bidrankperviwe.component';

describe('BidrankperviweComponent', () => {
  let component: BidrankperviweComponent;
  let fixture: ComponentFixture<BidrankperviweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidrankperviweComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidrankperviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
