import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphMarketOverviewComponent } from './graph-market-overview.component';

describe('GraphMarketOverviewComponent', () => {
  let component: GraphMarketOverviewComponent;
  let fixture: ComponentFixture<GraphMarketOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphMarketOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphMarketOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
