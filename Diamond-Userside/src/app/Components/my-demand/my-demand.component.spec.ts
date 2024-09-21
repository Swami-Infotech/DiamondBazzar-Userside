import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDemandComponent } from './my-demand.component';

describe('MyDemandComponent', () => {
  let component: MyDemandComponent;
  let fixture: ComponentFixture<MyDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDemandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
