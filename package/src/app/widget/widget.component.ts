import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../service/general-service/widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [WidgetService]
})
export class WidgetComponent implements OnInit {
  news: any[] = [];

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.getNews();
    setInterval(() => this.getNews(), 300000)
  }

  getNews(): void {
    this.widgetService.getData()
      .subscribe((res:any) => {
        this.news = res;
      });
  }

}
