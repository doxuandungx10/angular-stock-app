import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailBuyOrderComponent } from './coin-detail-buy-order.component';

describe('CoinDetailBuyOrderComponent', () => {
  let component: CoinDetailBuyOrderComponent;
  let fixture: ComponentFixture<CoinDetailBuyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinDetailBuyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDetailBuyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
