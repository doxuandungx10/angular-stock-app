import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/service/general-service/widget.service';
@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.css'],
  providers: [WidgetService]
})
export class Timeline2Component implements OnInit {
  news: any[] = [];

  constructor(private timeline2Service: WidgetService) { }

  ngOnInit() {
    this.getNews();
    setInterval(() => this.getNews(), 300000)
  }

  getNews(): void {
    this.timeline2Service.getData()
      .subscribe((res:any) => {
        this.news = res;
      });
  }
}
