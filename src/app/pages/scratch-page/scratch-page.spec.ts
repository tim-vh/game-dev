import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchPage } from './scratch-page';

describe('ScratchPage', () => {
  let component: ScratchPage;
  let fixture: ComponentFixture<ScratchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
