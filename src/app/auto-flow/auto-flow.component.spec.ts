import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFlowComponent } from './auto-flow.component';

describe('AutoFlowComponent', () => {
  let component: AutoFlowComponent;
  let fixture: ComponentFixture<AutoFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
