import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsizeComponent } from './postsize.component';

describe('PostsizeComponent', () => {
  let component: PostsizeComponent;
  let fixture: ComponentFixture<PostsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
