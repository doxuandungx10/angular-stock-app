import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
    topCrypto = [
        {
          image: "assets/images/svg/icon1.svg",
          price: "$168,331.09",
          up_down: "45%",
          time_period: "This week",
          
        },
        {
          image: "assets/images/svg/icon2.svg",
          price: "$24,098",
          up_down: "45%",
          time_period: "This week",
        },
        {
          image: "assets/images/svg/icon3.svg",
          price: "$667,224",
          up_down: "45%",
          time_period: "This week",
        },
        {
          image: "assets/images/svg/icon4.svg",
          price: "$667,224",
          up_down: "45%",
          time_period: "This week",
        },
    ];
    
    cryptoCards = [
        {
          image: "assets/images/card/card1.jpg",
          icon_image: "assets/images/svg/icon5.svg",
          price: "$673,412.66",
          valid_thrugh: "08/21",
          name: "Marquezz Silalahi",
          
        },
        {
          image: "assets/images/card/card2.jpg",
          icon_image: "assets/images/svg/icon6.svg",
          price: "$673,412.66",
          valid_thrugh: "08/21",
          name: "Marquezz Silalahi",
        },
        {
          image: "assets/images/card/card3.jpg",
          icon_image: "assets/images/svg/icon6.svg",
          price: "$673,412.66",
          valid_thrugh: "08/21",
          name: "Marquezz Silalahi",
        },
        {
          image: "assets/images/card/card4.jpg",
          icon_image: "assets/images/svg/icon6.svg",
          price: "$673,412.66",
          valid_thrugh: "08/21",
          name: "Marquezz Silalahi",
        },
    ];
    
    quickTransfer = [
        {
          name: "Samuel",
          username: "@sam224",
          image: "assets/images/contacts/Untitled-1.jpg",
          
        },
        {
          name: "Cindy",
          username: "@cindyss",
          image: "assets/images/contacts/Untitled-2.jpg",
        },
        {
          name: "David",
          username: "@davidxc",
          image: "assets/images/contacts/Untitled-3.jpg",
        },
        {
          name: "Martha",
          username: "@marthaa",
          image: "assets/images/contacts/Untitled-4.jpg",
        },
        {
          name: "Olivia",
          username: "@oliv62",
          image: "assets/images/contacts/Untitled-5.jpg",
        },
  ];

}
