import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBasedPlacementComponent } from './area-based-placement.component';

describe('AreaBasedPlacementComponent', () => {
  let component: AreaBasedPlacementComponent;
  let fixture: ComponentFixture<AreaBasedPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaBasedPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBasedPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
