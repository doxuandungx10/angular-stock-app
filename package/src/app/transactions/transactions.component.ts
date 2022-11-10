import { Component, OnInit } from '@angular/core';

interface transaction {
  image: string;
  trans_id?: string;
  trans_date: string;
  from: string;
  user_image: string;
  to: string;
  coin: string;
  coin_image: string;
  amount: string;
  note: string;
  status: string;
  status_class: string;
}


const TRANSACTIONS: transaction[] = [
		  {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-1.jpg",
			to: "Samuel",
			coin: "Bitcoin",
			coin_image: "assets/images/svg/icon_btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"CANCELED",
			status_class:"text-danger",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-2.jpg",
			to: "Cindy",
			coin: "Ethereum",
			coin_image: "assets/images/svg/icon_eth.svg",
			amount: "-$12,768",
			note:"Lorem ipsum dol.",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-3.jpg",
			to: "Marquezz",
			coin: "Ripple",
			coin_image: "assets/images/svg/icon_ltc.svg",
			amount: "-$455",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-1.jpg",
			to: "David",
			coin: "Litecoin",
			coin_image: "assets/images/svg/icon_ltc.svg",
			amount: "+$5,553",
			note:"None",
			status:"PENDING",
			status_class:"text-light",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Thomas",
			user_image: "assets/images/table/Untitled-1.jpg",
			to: "Cindy",
			coin: "Bitcoin",
			coin_image: "assets/images/svg/icon_btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-2.jpg",
			to: "Samuel",
			coin: "Ethereum",
			coin_image: "assets/images/svg/icon_eth.svg",
			amount: "-$12,768",
			note:"None",
			status:"PENDING",
			status_class:"text-light",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-3.jpg",
			to: "Samuel",
			coin: "Ripple",
			coin_image: "assets/images/svg/icon_mon.svg",
			amount: "-$455",
			note:"Lorem ipsum dol..",
			status:"CANCELED",
			status_class:"text-danger",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-3.jpg",
			to: "David",
			coin: "Litecoin",
			coin_image: "assets/images/svg/icon_ltc.svg",
			amount: "+$5,553",
			note:"None",
			status:"PENDING",
			status_class:"text-light",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-1.jpg",
			to: "Lucyana",
			coin: "Bitcoin",
			coin_image: "assets/images/svg/icon_btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-2.jpg",
			to: "Cindy",
			coin: "Ethereum",
			coin_image: "assets/images/svg/icon_eth.svg",
			amount: "-$12,768",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346512532",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-3.jpg",
			to: "Litecoin",
			coin: "Ripple",
			coin_image: "assets/images/svg/icon_mon.svg",
			amount: "-$455",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-3.jpg",
			to: "Lucyana",
			coin: "Litecoin",
			coin_image: "assets/images/svg/icon_ltc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#12415346563555",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-3.jpg",
			to: "Cindy",
			coin: "Bitcoin",
			coin_image: "assets/images/svg/icon_btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/Untitled-2.jpg",
			to: "Lucyana",
			coin: "Ethereum",
			coin_image: "assets/images/svg/icon_eth.svg",
			amount: "+987",
			note:"Lorem ipsum dol",
			status:"PENDING",
			status_class:"text-light",
		  },
  ];



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {




  constructor() {
		
		this.updateTransactionListing();
 
  }

  ngOnInit(): void {
  }
   
    
    
  page = 1;
  pageSize = 10;
  collectionSize = TRANSACTIONS.length;
  transactions!: transaction[];
  
  updateTransactionListing() {
    this.transactions = TRANSACTIONS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  

}
