import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  coinHolding = [
        {
          name: "Ethereum",
          short_name: "ETH",
          wrapper_class: "bg-success",
          price: "$667,224",
          price_varialtion:"45%",
          varialtion_class:"text-success",
          varialtion_image:"assets/images/svg/graph_up.svg",
          image: "assets/images/svg/eth_port.svg",
          
        },
        {
          name: "LiteCoin",
          short_name: "LTC",
          wrapper_class: "bg-secondary",
          price: "$168,331.09",
          price_varialtion:"45%",
          varialtion_class:"text-danger",
          varialtion_image:"assets/images/svg/graph_down.svg",
          image: "assets/images/svg/lit_port.svg",
        },
        {
          name: "BitCoin",
          short_name: "BTH",
          wrapper_class: "bg-warning",
          price: "$667,224",
          price_varialtion:"45%",
          varialtion_class:"text-success",
          varialtion_image:"assets/images/svg/graph_up.svg",
          image: "assets/images/svg/btc_port.svg",
        },
        {
          name: "Monero",
          short_name: "XMR",
          wrapper_class: "bg-primary",
          price: "$24,098",
          price_varialtion:"45%",
          varialtion_class:"text-success",
          varialtion_image:"assets/images/svg/graph_up.svg",
          image: "assets/images/svg/mon_port.svg",
        },
  ];

}
