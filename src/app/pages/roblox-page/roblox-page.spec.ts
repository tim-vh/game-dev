import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobloxPage } from './roblox-page';

describe('RobloxPage', () => {
  let component: RobloxPage;
  let fixture: ComponentFixture<RobloxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobloxPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobloxPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
