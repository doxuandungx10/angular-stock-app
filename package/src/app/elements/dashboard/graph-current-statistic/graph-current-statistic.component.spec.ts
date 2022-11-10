import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCurrentStatisticComponent } from './graph-current-statistic.component';

describe('GraphCurrentStatisticComponent', () => {
  let component: GraphCurrentStatisticComponent;
  let fixture: ComponentFixture<GraphCurrentStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCurrentStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCurrentStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
