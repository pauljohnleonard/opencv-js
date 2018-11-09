import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Examp1Component } from './examp1.component';

describe('Examp1Component', () => {
  let component: Examp1Component;
  let fixture: ComponentFixture<Examp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Examp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Examp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
