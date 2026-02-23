import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecodeArcadePage } from './makecode-arcade-page';

describe('MakecodeArcade', () => {
  let component: MakecodeArcadePage;
  let fixture: ComponentFixture<MakecodeArcadePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakecodeArcadePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakecodeArcadePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
