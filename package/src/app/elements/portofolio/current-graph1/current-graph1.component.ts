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
  ApexPlotOptions,
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
  plotOptions: ApexPlotOptions | any;
  
};


@Component({
  selector: 'app-current-graph1',
  templateUrl: './current-graph1.component.html',
  styleUrls: ['./current-graph1.component.css']
})
export class CurrentGraph1Component implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
          name: 'Buy',
          data: [44, 55, 57, 56, 61]
        }, {
          name: 'Sell',
          data: [76, 85, 101, 98, 87]
        }],
        chart: {
          type: 'bar',
          height: 350,
		  toolbar: {
                show: false
            },
        },
        grid: {	
			show: false
		},
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            // endingShape: 'rounded'
            borderRadius:5
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 0,
          colors: ['transparent'],
		  lineCap: 'round',
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
		   labels: {
			show: false,
		   },
			 axisBorder:{
				   show: false,	
			 },
			 axisTicks: {
				show: false,
			},
        },
        yaxis: {
			show: false	
        },
        colors: ['#5f5594', '#71b945'],
		legend:{
            show:true,
			itemMargin: {
			  horizontal: 15,
			  vertical: 0
			},
			 markers:{
				  radius: 12,
			 },
		},
		fill:{
			opacity:1,
		},
        tooltip: {
          y: {
            formatter: function (val:any) {
              return "$ " + val + " thousands"
            }
          }
        }
        
        
        
		
    };
  }

  ngOnInit(): void {
  }

}
