import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries,  ApexResponsive, ApexChart, ApexDataLabels, ApexStroke, ApexLegend } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  dataLabels: ApexDataLabels | any;
  stroke: ApexStroke | any;
  colors: string[] | any;
  legend: ApexLegend | any;
};


@Component({
  selector: 'app-current-graph2',
  templateUrl: './current-graph2.component.html',
  styleUrls: ['./current-graph2.component.css']
})
export class CurrentGraph2Component implements OnInit {
    
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [34, 12, 41, 22],
        chart: {
          type: 'donut',
		  width:270
        },
      // labels: ["Installment", "Rent", "Investment", "Restaurant", "Food"],
      stroke: {
          width: 0,
      },
        colors:['#374C98', '#FFAB2D', '#FF782C', '#00ADA3'],
        dataLabels: {
          enabled: false
        },
        legend: {
              position: "bottom",
              show:false
        },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width:200
            },
            legend: {
              position: "bottom",
              show:false
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
