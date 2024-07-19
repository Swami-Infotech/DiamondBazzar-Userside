import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughPostComponent } from './rough-post.component';

describe('RoughPostComponent', () => {
  let component: RoughPostComponent;
  let fixture: ComponentFixture<RoughPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoughPostComponent]
    });
    fixture = TestBed.createComponent(RoughPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
