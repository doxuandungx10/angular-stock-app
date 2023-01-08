import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableService } from '../../../service/general-service/table-stocks.service';
import { Component,  Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { StockDetailService } from 'src/app/service/general-service/stock-detail.service';
import {ChartData, ChartService} from "../../../service/general-service/chart.service";

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
  stocks: any[] = [];
  sid: any = {};
  topMover: any[] = [];
  isVisible: boolean = false;
  selectedSym = "";
  stockDetail: any[] = [];
  listChartData:ChartData[] =[];

  constructor(private tableService: TableService,
    private modalService: NgbModal,
    private stockDetailService: StockDetailService,
    private chartDetailService: ChartService
  ) { }

  ngOnInit() {
    this.getStocks();
    setInterval(() => this.getStocks(), 30000)
  }

  setDataChartDetails(from,to,sym){
    this.chartDetailService.setData(from, to, sym)
    this.chartDetailService.getData();
    this.chartDetailService.getDataResponse();
  }
   getDataChartDetails(){
     console.log(this.chartDetailService.getLengthData())
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

  getStocks(): void {
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
        // console.log(this.stocks);
      });
  }

  async getStockDetail(sym: any) {
    this.stockDetailService.getBaseInfo(sym).subscribe((res:any) => {
      // console.log(res);

      this.stockDetail = res;
    });
    this.setDataChartDetails(1639038571,1673166631,sym)
   setTimeout(()=> this.getDataChartDetails(),100);
  }

  toTextColor(data: any) {
    if (data.lastPrice == data.c) return 'stock-c' // khớp lệnh == trần => tím
    else if (data.lastPrice == data.f) return 'stock-f' // khớp lệnh == sàn => xanh dương
    else if (data.lastPrice == data.r) return 'stock-r' // khớp lệnh == t.c => vàng
    else if (data.lastPrice > data.r) return 'status-i' // khớp lệnh > t.c => xanh
    else if (data.lastPrice < data.r) return 'status-d' // khớp lệnh < t.c => đỏ
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
    // console.log(data);
		this.modalService.open(modelId, {size: 'xl'});
    this.getStockDetail(this.selectedSym);
	}

}
