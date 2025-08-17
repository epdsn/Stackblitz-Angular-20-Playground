import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyAndConsts } from './readonly-and-consts';

describe('ReadonlyAndConsts', () => {
  let component: ReadonlyAndConsts;
  let fixture: ComponentFixture<ReadonlyAndConsts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadonlyAndConsts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadonlyAndConsts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
