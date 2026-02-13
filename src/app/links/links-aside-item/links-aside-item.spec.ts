import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAsideItem } from './links-aside-item';

describe('LinksAsideItem', () => {
  let component: LinksAsideItem;
  let fixture: ComponentFixture<LinksAsideItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksAsideItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksAsideItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
