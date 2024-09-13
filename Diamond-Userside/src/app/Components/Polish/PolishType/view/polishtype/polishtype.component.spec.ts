import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishtypeComponent } from './polishtype.component';

describe('PolishtypeComponent', () => {
  let component: PolishtypeComponent;
  let fixture: ComponentFixture<PolishtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolishtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolishtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
