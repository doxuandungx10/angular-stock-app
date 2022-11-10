import { Component, OnInit, ViewChild } from '@angular/core';

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
  ApexResponsive,
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
  responsive: ApexResponsive[] | any;
};

@Component({
  selector: 'app-graph-market-overview',
  templateUrl: './graph-market-overview.component.html',
  styleUrls: ['./graph-market-overview.component.css']
})
export class GraphMarketOverviewComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
            name: 'series1',
            data: [200, 400, 400, 300, 500, 200, 200,400, 300, 300]
        }, {
          name: 'series2',
          data: [500, 300, 200, 400, 600, 400, 400, 300, 500, 200]
        }],
        chart: {
          height: 350,
		  toolbar:{
			show:false
		  },
          type: 'area'
        },
        colors:["#FFAB2D","#00ADA3"],
		legend:{
			show:false
		},
		grid:{
			borderColor: '#EEEEEE',
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
			width:4,
          curve: 'smooth'
        },
        xaxis: {
            categories: ["Week 01","Week 02","Week 03","Week 04","Week 05","Week 06","Week 07","Week 08","Week 09","Week 10"],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				   fontFamily: 'Poppins',
				  fontWeight: 400,
				  
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
			formatter: function (value: any) {
			  return value + "k";
			}
		  },
		},
		fill:{
			opacity:0.2,
			type:'solid'
		},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        responsive: [{
            breakpoint: 575,
            options: {
                chart: {
                    height: 200,
                }
            }
        }]
    };
  }
  ngOnInit(): void {
  }

}
