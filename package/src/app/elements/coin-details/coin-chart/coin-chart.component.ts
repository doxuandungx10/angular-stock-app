import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexGrid,
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
  labels: string[] | any;
  legend: ApexLegend | any;
  subtitle: ApexTitleSubtitle | any;
  colors: string[] | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-coin-chart',
  templateUrl: './coin-chart.component.html',
  styleUrls: ['./coin-chart.component.css']
})
export class CoinChartComponent implements OnInit {
    
    
    @Input() data:any;

    
    
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
  
    // console.log(this.data);
    // alert(this.data + "test");
    this.chartOptions = {
      series: [{
            data: [300, 300, 100, 250, 350, 500, 400, 400, 200,600]
      }],
        chart: {
          height: 350,
          type: 'area',
		  toolbar:{
			  show:false
		  },
        },
        // colors:['#ffab2d'],
		// legend:{
			// show:false
		// },
		// grid:{
			// borderColor: '#EEEEEE',
		// },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width:4,
          curve: 'smooth'
        },
        xaxis: {
            categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06", "Week 07","Week 08","Week 09","Week 010"],
			  labels: {
			   style: {
				   colors:'#808080',
				  // fontSize: '13px',
				   // fontFamily: 'Poppins',
				  // fontWeight: 400,
				  
				},
			  },
		},
		yaxis: {
		  labels: {
			style: {
				colors: '#787878',
                fontSize: '13px',
                fontFamily: 'Poppins',
                fontWeight: 400
				
			},
			formatter: function (value:any) {
			  return value + "k";
			}
		  },
		},
		/* fill:{
			opacity:0.2,
			type:'solid'
		}, */
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    };
  }

  ngOnInit(): void {
  }

}
