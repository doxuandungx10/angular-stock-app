import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableService } from '../../../service/general-service/table-stocks.service';
import { Component,  Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { StockDetailService } from 'src/app/service/general-service/stock-detail.service';
import {ChartData, ChartService} from "../../../service/general-service/chart.service";
import { Observable, forkJoin } from 'rxjs';
import { StockResponse } from './stock-response.interface';

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 1,
      color: 'red'
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
    })
  ),
  transition('open=>close', [animate('2s ease-out')]),
  transition('close=>open', [animate('2s ease-in')]),
])


@Component({
  selector: 'app-table-sortable',
  templateUrl: './table-sortable.component.html',
  styleUrls: ['./table-sortable.component.css'],
  providers: [TableService, StockDetailService],
  animations: [fadeInOut]
})
export class TableSortableComponent  {
  stocks: StockResponse[];
  sid: any = {};
  topMover: any[] = [];
  isVisible: boolean = false;
  selectedSym = "";
  stockDetail: any[] = [];
  listChartData:ChartData[] =[];
  currentStocks: StockResponse[];

  constructor(private tableService: TableService,
    private modalService: NgbModal,
    private stockDetailService: StockDetailService,
    private chartDetailService: ChartService
  ) { }

  ngOnInit() {
    this.getNewStocks();
    setInterval(() => this.getNewStocks(), 1500)
  }

  setDataChartDetails(from,to,sym){
    this.chartDetailService.setData(from, to, sym) //set biến param startTime, endTime, symbol để gọi api
    this.chartDetailService.getData(); //subscribe API, lấy data
    this.chartDetailService.getDataResponse(); // nhận data trả về
  }
   getDataChartDetails(){
     console.log(this.chartDetailService.getLengthData())
     //format lại data thành dạng array of objects 
     this.listChartData = []; //clear array trước khi set
    for (let i = 0 ; i < this.chartDetailService.getLengthData(); i++){
      this.listChartData.push({
        s:this.chartDetailService.getS(),
        symbol:this.chartDetailService.getSymbol(),
        c:this.chartDetailService.getC()[i],
        h:this.chartDetailService.getH()[i],
        l:this.chartDetailService.getL()[i],
        o:this.chartDetailService.getO()[i],
        t:this.chartDetailService.getT()[i],
        v:this.chartDetailService.getV()[i],
      })
      console.log(this.listChartData)
    }

  }

  async getStockDetail(sym: any) {
    this.stockDetailService.getBaseInfo(sym).subscribe((res:any) => {
      // console.log(res);

      this.stockDetail = res;
    });
    // const character = this.setDataChartDetails(1639038571,1673166631,sym);
    // const characterHomeworld = this.getDataChartDetails();

    // forkJoin([character, characterHomeworld]).subscribe(results => {
    //   console.log('character', results[0]);
    //   console.log('characterHomeworld', results[1]);
    // });
    this.setDataChartDetails(1639038571,1673166631,sym)
   setTimeout(()=> this.getDataChartDetails(),100);
  }

  getOldStocks(): void {
    this.currentStocks = this.stocks;
  }

  getNewStocks(): void {
    this.tableService.getData()
      .subscribe((res:any) => {
        this.stocks = res.map(el => ({
          ...el,
          g1: el.g1.split('|'),
          g2: el.g2.split('|'),
          g3: el.g3.split('|'),
          g4: el.g4.split('|'),
          g5: el.g5.split('|'),
          g6: el.g6.split('|'),
          g7: el.g7.split('|'),
          statusColor: this.toTextColor(el)
        }));
        console.log("new stock",this.stocks);
        setTimeout(() => {
          this.currentStocks = this.stocks;
          console.log("old stock",this.currentStocks);
        }, 1200)

        // // add class color
        // this.stocks = this.stocks.map(el => ({
        //   ...el,
        //   statusBgSell3: this.toStatusBackground(el.g1[2]),
        //   statusBgSell2: this.toStatusBackground(el.g2[2]),
        //   statusBgSell1: this.toStatusBackground(el.g3[2]),
        //   statusBg: this.toStatusBackground(el.g4[2]),
        //   statusBgBuy1: this.toStatusBackground(el.g5[2]),
        //   statusBgBuy2: this.toStatusBackground(el.g6[2]),
        //   statusBgBuy3: this.toStatusBackground(el.g6[2])
        // }));
        // console.log("with class", this.stocks);

        // //remove class color
        // setTimeout(() => {
        //   this.stocks = this.stocks.map(el => ({
        //     ...el,
        //     statusBgSell3: "",
        //     statusBgSell2: "",
        //     statusBgSell1: "",
        //     statusBg: "",
        //     statusBgBuy1: "",
        //     statusBgBuy2: "",
        //     statusBgBuy3: ""
        //   }));
        //   console.log("no class", this.stocks);
        // }, 1200)
      });
  }

  toTextColor(data: any) {
    if (data.lastPrice == data.c) return 'stock-c' // khớp lệnh == trần => tím
    else if (data.lastPrice == data.f) return 'stock-f' // khớp lệnh == sàn => xanh dương
    else if (data.lastPrice == data.r) return 'stock-r' // khớp lệnh == t.c => vàng
    else if (data.lastPrice > data.r) return 'status-i' // khớp lệnh > t.c => xanh
    else if (data.lastPrice < data.r) return 'status-d' // khớp lệnh < t.c => đỏ
  }

  toStatusBackground(data: any) {
    // for (let i=0; i<currentList.length; i++) {
    //   currentList.map(el => ({
    //     ...el,
    //     statusBgSell3: this.toStatusBackground(el.g1[2]),
    //     statusBgSell2: this.toStatusBackground(el.g2[2]),
    //     statusBgSell1: this.toStatusBackground(el.g3[2]),
    //     statusBg: this.toStatusBackground(el.g4[2]),
    //     statusBgBuy1: this.toStatusBackground(el.g5[2]),
    //     statusBgBuy2: this.toStatusBackground(el.g6[2]),
    //     statusBgBuy3: this.toStatusBackground(el.g6[2])
    //   }))
    // }
    if (data == 'd') return 'background-color: #FF373A; color: white'
    else if (data == 'i') return 'background-color: #20FF00; color: white'
    else if (data =='e') return 'background-color: none; color: none'
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  // onSort({column, direction}: SortEvent) {

  //   // resetting other headers
  //   this.headers.forEach(header => {
  //     if (header.sortable !== column) {
  //       header.direction = '';
  //     }
  //   });

  //   // sorting countries
  //   if (direction === '' || column === '') {
  //     this.countries = COUNTRIES;
  //   } else {
  //     this.countries = [...COUNTRIES].sort((a, b) => {
  //       const res = compare(a[column], b[column]);
  //       return direction === 'asc' ? res : -res;
  //     });
  //   }
  // }

	open(modelId:any, data) {
    this.selectedSym = "";
    this.selectedSym = data;
    console.log(data);
		this.modalService.open(modelId, {size: 'xl', centered: true});
    this.getStockDetail(this.selectedSym);
	}

}
