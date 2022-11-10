import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-detail-sell-order',
  templateUrl: './coin-detail-sell-order.component.html',
  styleUrls: ['./coin-detail-sell-order.component.css']
})
export class CoinDetailSellOrderComponent implements OnInit {
    
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
