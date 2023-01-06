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
export class TableService implements OnInit {
  private apiURL = "https://bgapidatafeed.vps.com.vn/getliststockdata/ACB,BID,BVH,CTG,FPT,GAS,GVR,HDB,HPG,KDH,MBB,MSN,MWG,NVL,PDR,PLX,POW,SAB,SSI,STB,TCB,TPB,VCB,VHM,VIB,VIC,VJC,VNM,VPB,VRE"
  private getIDApi = "https://bgdatafeed.vps.com.vn/socket.io/?EIO=3&transport=polling&t=OKGP-f6"
  public websocket = "wss://bgdatafeed.vps.com.vn/socket.io/?EIO=3&transport=websocket&sid="

  private topMoverBreakout = "https://fiin-market.ssi.com.vn/TopMover/GetTopBreakout?language=vi&ComGroupCode=All&TimeRange=OneWeek&Rate=OnePointFive"

  private joinMess = '42["regs","{\"action\":\"join\",\"list\":\"ACB,BID,BVH,CTG,FPT,GAS,GVR,HDB,HPG,KDH,MBB,MSN,MWG,NVL,PDR,PLX,POW,SAB,SSI,STB,TCB,TPB,VCB,VHM,VIB,VIC,VJC,VNM,VPB,VRE\"}"]'
  private leaveMess = '42["regs","{\"action\":\"leave\",\"list\":\"ACB,BID,BVH,CTG,FPT,GAS,GVR,HDB,HPG,KDH,MBB,MSN,MWG,NVL,PDR,PLX,POW,SAB,SSI,STB,TCB,TPB,VCB,VHM,VIB,VIC,VJC,VNM,VPB,VRE\"}"]'
  private probe = "2probe";
  private keepConnect = "2";


  private subject: AnonymousSubject<MessageEvent> | undefined;
  public messages: Subject<Message> | undefined;

  stocks: any[] = [];
  sid: any;
  error: any;
  received: any = [];
  sent = [];
  topMovers: any[] = [];

  constructor(private http: HttpClient) {
    this.getStocks();
    this.getSID();
    this.sendMessage();
    this.getTopMoverAPI();
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
    return this.http.get(this.apiURL)
  }

  //get SID from api
  getId() {
    return this.http.get(this.getIDApi)
  }

  //get data from stockboard and assign it
  getStocks() {
    this.getData().subscribe((data: any) => {
      this.stocks = data;
    })
  }

  //get SID from api and send it to call socket function
  getSID() {
    this.getId().subscribe((data: any) => {
      this.sid = data;
    },
      (err) => {
        this.error = err.error.text;
        this.error = this.error.split('\"', 5);
        this.sid = this.error[3];
        this.callSocket();
      }
    )
  }

  getTopMoverAPI() {
    return this.http.get(this.topMoverBreakout)
  }

  getTopMover() {
    this.getTopMoverAPI().subscribe((data: any) => {
      this.topMovers = data;
    } )
  }

  //add sid to the websocket URL and connect
  callSocket(){
    console.log("The sid is", this.sid);
      this.websocket += this.sid;
      this.messages = <Subject<Message>>this.connect(this.websocket).pipe(
        map(
          (response: MessageEvent): Message => {
            console.log(response.data);
            let data = JSON.parse(response.data)
            return data;
          }
        )
      );
  }

  sendMessage() {
    this.messages?.next({content: this.joinMess})
    this.messages?.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from ws: ", msg);
    });
  }
}
