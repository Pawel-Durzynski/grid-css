import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBasedPlacementComponent } from './line-based-placement.component';

describe('LineBasedPlacementComponent', () => {
  let component: LineBasedPlacementComponent;
  let fixture: ComponentFixture<LineBasedPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineBasedPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBasedPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
