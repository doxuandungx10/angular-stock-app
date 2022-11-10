import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTradingActivitiesComponent } from './recent-trading-activities.component';

describe('RecentTradingActivitiesComponent', () => {
  let component: RecentTradingActivitiesComponent;
  let fixture: ComponentFixture<RecentTradingActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTradingActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTradingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
