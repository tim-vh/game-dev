import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOverview } from './posts-overview';

describe('PostOverview', () => {
  let component: PostsOverview;
  let fixture: ComponentFixture<PostsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
