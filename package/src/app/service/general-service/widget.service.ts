import { Injectable, OnInit, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { HttpResponse } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

export interface Message {
  // source: string;
  content: string;
}

// const websocket = "wss://bgdatafeed.vps.com.vn/socket.io/?EIO=3&transport=websocket&sid="


@Injectable()
export class WidgetService implements OnInit {

  private newsApi = "https://bgapidatafeed.vps.com.vn/getTopNews/30"
  // private newsApi = "https://wichart.vn/wichartapi/wichart/tintuctonghop?limit=30"

  private subject: AnonymousSubject<MessageEvent> | undefined;
  public messages: Subject<Message> | undefined;

  news: any[] = [];
  error: any;
  received: any = [];
  sent = [];

  constructor(private http: HttpClient) {
    this.getNews();
  }

  ngOnInit() {
    //
  }

  public connect(url: any): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: any): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      error: () => undefined,
      complete: () => undefined,
      next: (data: any) => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }

  //get data for stock board from api
  getData() {
    return this.http.get(this.newsApi)
  }

  //get data from stockboard and assign it
  getNews() {
    this.getData().subscribe((data: any) => {
      this.news = data;
    })
  }
}
