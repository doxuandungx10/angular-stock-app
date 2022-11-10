import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-detail-buy-order',
  templateUrl: './coin-detail-buy-order.component.html',
  styleUrls: ['./coin-detail-buy-order.component.css']
})
export class CoinDetailBuyOrderComponent implements OnInit {
    
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
