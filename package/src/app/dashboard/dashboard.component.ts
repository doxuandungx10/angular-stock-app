import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  news = [
        {
          image: "assets/images/profile/5.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },
        {
          image: "assets/images/profile/6.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },
        {
          image: "assets/images/profile/7.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },

  ];



	open(modelId:any) {
		this.modalService.open(modelId);
	}


}
