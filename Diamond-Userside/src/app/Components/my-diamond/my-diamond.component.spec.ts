import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiamondComponent } from './my-diamond.component';

describe('MyDiamondComponent', () => {
  let component: MyDiamondComponent;
  let fixture: ComponentFixture<MyDiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDiamondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
