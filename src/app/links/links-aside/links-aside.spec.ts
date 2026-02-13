import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAside } from './links-aside';

describe('LinksAside', () => {
  let component: LinksAside;
  let fixture: ComponentFixture<LinksAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksAside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksAside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
