import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostspecialComponent } from './postspecial.component';

describe('PostspecialComponent', () => {
  let component: PostspecialComponent;
  let fixture: ComponentFixture<PostspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostspecialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
