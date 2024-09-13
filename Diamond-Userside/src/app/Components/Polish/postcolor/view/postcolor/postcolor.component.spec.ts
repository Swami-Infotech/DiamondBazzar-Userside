import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcolorComponent } from './postcolor.component';

describe('PostcolorComponent', () => {
  let component: PostcolorComponent;
  let fixture: ComponentFixture<PostcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcolorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
