import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-quick-transfer-crousal',
  templateUrl: './quick-transfer-crousal.component.html',
  styleUrls: ['./quick-transfer-crousal.component.css']
})
export class QuickTransferCrousalComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {

  }
  
  
  customOptions: OwlOptions = {
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    rtl:true,
    dots: false,
    navText: ['', ''],
    responsive:{
        0:{
            items:3
        },
        450:{
            items:4
        },
        600:{
            items:6
        },	
        991:{
            items:6
        },			
        
        1200:{
            items:7
        },
        1601:{
            items:7
        }
    }
  }

}
