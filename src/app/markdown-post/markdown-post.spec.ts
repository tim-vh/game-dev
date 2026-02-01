import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPost } from './markdown-post';

describe('MarkdownPost', () => {
  let component: MarkdownPost;
  let fixture: ComponentFixture<MarkdownPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
