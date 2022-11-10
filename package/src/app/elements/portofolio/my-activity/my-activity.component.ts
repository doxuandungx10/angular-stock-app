import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableData = [
        {
          image: "assets/images/svg/ic_topup.svg",
          type: "Topup",
          time: "06:24:45 AM",
          price: "+$5,553",
          status: "Completed",
          status_class: "text-success",
          
        },
        {
          image: "assets/images/svg/ic_withdraw.svg",
          type: "Withdraw",
          time: "06:24:45 AM",
          price: "-$5,553",
          status: "Pending",
          status_class: "text-light",
        },
        {
          image: "assets/images/svg/ic_topup.svg",
          type: "Withdraw",
          time: "06:24:45 AM",
          price: "-$912",
          status: "Canceled",
          status_class: "text-danger",
        },
        {
          image: "assets/images/svg/ic_topup.svg",
          type: "Topup",
          time: "06:24:45 AM",
          price: "+$7,762",
          status: "Completed",
          status_class: "text-success",
          
        },
        {
          image: "assets/images/svg/ic_topup.svg",
          type: "Topup",
          time: "06:24:45 AM",
          price: "+$5,553",
          status: "Completed",
          status_class: "text-success",
          
        },
        {
          image: "assets/images/svg/ic_topup.svg",
          type: "Withdraw",
          time: "06:24:45 AM",
          price: "-$912",
          status: "Canceled",
          status_class: "text-danger",
        },
  ];

}
