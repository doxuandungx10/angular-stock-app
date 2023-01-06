import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableService } from '../../../service/general-service/table-stocks.service';
import { Component,  Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    id: 2,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    id: 3,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    id: 4,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

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
  providers: [TableService],
  animations: [fadeInOut]
})
export class TableSortableComponent  {
  @ViewChildren( NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  stocks: any[] = [];
  sid: any = {};
  countries = COUNTRIES;
  topMover: any[] = [];
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.getStocks();
    // setInterval(() => this.getStocks(), 300)
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
        console.log(this.stocks);
      });
  }

  toTextColor(data: any) {
    if (data.lastPrice == data.c) return 'stock-c' // khớp lệnh == trần => tím
    else if (data.lastPrice == data.f) return 'stock-f' // khớp lệnh == sàn => xanh dương
    else if (data.lastPrice == data.r) return 'stock-r' // khớp lệnh == t.c => vàng
    else if (data.lastPrice > data.r) return 'status-i' // khớp lệnh > t.c => xanh
    else if (data.lastPrice < data.r) return 'status-d' // khớp lệnh < t.c => đỏ
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
