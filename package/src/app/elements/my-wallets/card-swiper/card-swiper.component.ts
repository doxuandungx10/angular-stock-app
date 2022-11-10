import { Component, OnInit, Input } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, {  Scrollbar, Mousewheel } from 'swiper';
SwiperCore.use([Scrollbar]);

@Component({
  selector: 'app-card-swiper',
  templateUrl: './card-swiper.component.html',
  styleUrls: ['./card-swiper.component.css']
})
export class CardSwiperComponent implements OnInit {

  @Input() data:any;

  	constructor() {}

  ngOnInit(): void {
  }
    
    
}
