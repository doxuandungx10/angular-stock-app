import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailSellOrderComponent } from './coin-detail-sell-order.component';

describe('CoinDetailSellOrderComponent', () => {
  let component: CoinDetailSellOrderComponent;
  let fixture: ComponentFixture<CoinDetailSellOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailSellOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailSellOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
