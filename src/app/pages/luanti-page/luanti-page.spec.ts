import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuantiPage } from './luanti-page';

describe('LuantiPage', () => {
  let component: LuantiPage;
  let fixture: ComponentFixture<LuantiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuantiPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuantiPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
