import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphMainLimitsComponent } from './graph-main-limits.component';

describe('GraphMainLimitsComponent', () => {
  let component: GraphMainLimitsComponent;
  let fixture: ComponentFixture<GraphMainLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphMainLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphMainLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
