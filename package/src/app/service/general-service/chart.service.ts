import {Injectable, OnInit} from '@angular/core';
import {BaseService} from "../../shared/base-service/base-service.service";
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import {paramsList} from "swiper/angular/angular/src/utils/params-list";

@Injectable({
  providedIn: 'root'
})
export class ChartService implements OnInit{
  private c :[];
  private h :[];
  private l :[];
  private o :[];
  private t :[];
  private v :[];
  private lengthData:number;
  private s:string;
  private symbol:string;
  private startTime:number;
  private endTime:number;
//?symbol=BID&resolution=1D&from=1639038571&to=1673166631
  private apiURL = "https://histdatafeed.vps.com.vn/tradingview/history"
  getData(){
    console.log("zoday")
    let queryParams = new HttpParams();
    queryParams = queryParams.append("from",this.startTime);
    queryParams = queryParams.append("to",this.endTime);
    queryParams = queryParams.append("symbol",this.symbol);
    queryParams = queryParams.append("resolution","1D");
    return this.http.get(this.apiURL,{
      params:queryParams
    })
  }

  setEndTime(to:number){
    this.endTime = to;
  }
  setStartTime(from:number){
    this.startTime = from;
  }

  setData(from,to , symbol){
    this.symbol = symbol;
    this.endTime = to;
    this.startTime = from;
  }
  getDataResponse(){
   this.getData().subscribe((data:any)=>{
      this.c=data.c;
      this.h=data.h;
      this.l=data.l;
      this.o=data.o;
      this.t=data.t;
      this.v=data.v;
      this.s =data.s;
      this.symbol =data.symbol;
      this.lengthData =data.c.length;
  })}

  getLengthData(){
    return this.lengthData;
  }
  getC(){
    return this.c;
  }
  getH(){
    return this.h;
  }
  getL(){
    return this.l;
  }
  getO(){
    return this.o;
  }
  getT(){
    return this.t;
  }
  getV(){
    return this.v;
  }
  getS(){
    return this.s;
  }
  getSymbol(){
    return this.symbol;
  }
  constructor( private http:HttpClient) {
  }


  ngOnInit(): void {
  }
}

export interface ChartData {
  s:string,
  symbol:string;
  c:number;
  h:number;
  l:number;
  o:number;
  t:number;
  v:number;
}
