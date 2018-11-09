import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalFlowComponent } from './optical-flow.component';

describe('OpticalFlowComponent', () => {
  let component: OpticalFlowComponent;
  let fixture: ComponentFixture<OpticalFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpticalFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticalFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
