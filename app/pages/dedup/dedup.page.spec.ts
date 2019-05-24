import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedupPage } from './dedup.page';

describe('DedupPage', () => {
  let component: DedupPage;
  let fixture: ComponentFixture<DedupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
