import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexStroke,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  stroke: ApexStroke | any;
  colors: string[] | any;
};


@Component({
  selector: 'app-graph-current-statistic',
  templateUrl: './graph-current-statistic.component.html',
  styleUrls: ['./graph-current-statistic.component.css']
})
export class GraphCurrentStatisticComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [85, 60, 67, 50],
      chart: {
        height: 350,
        type: "radialBar"
      },
        plotOptions: {
          radialBar: {
				startAngle:-90,
			   endAngle: 90,
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
            }
          },
        },
        stroke:{
			 lineCap: 'round',
		},
        labels: ['Income', 'Income', 'Income', 'Income'],
        colors:['#ec8153', '#70b944','#498bd9','#6647bf'],
    };
  }

  ngOnInit(): void {
  }

}
