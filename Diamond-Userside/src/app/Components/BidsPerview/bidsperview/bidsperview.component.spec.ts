import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsperviewComponent } from './bidsperview.component';

describe('BidsperviewComponent', () => {
  let component: BidsperviewComponent;
  let fixture: ComponentFixture<BidsperviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidsperviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidsperviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
