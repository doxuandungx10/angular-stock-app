import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  themeClass="option5";
  
  toggleThemeClass(card:any) {
    this.themeClass = card;
  }

}
