import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexTooltip,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  colors: string[] | any;
  responsive: ApexResponsive[] | any;
};



@Component({
  selector: 'app-market-capital',
  templateUrl: './market-capital.component.html',
  styleUrls: ['./market-capital.component.css']
})
export class MarketCapitalComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        width: 220,
		height:50,
        type: "line",
        sparkline:{
          enabled: true
        },
        zoom: {
          enabled: false
        }
      },
      
      colors: ["#eb8153"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        enabled: false,
      },
      grid: {
          show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
      },
      yaxis: {
         show: false,
      },
        responsive: [{
            breakpoint: 575,
            options: {
                chart: {
                    width: 150,
                    height:50,
                }
            }
        }]
    };
  }
  
  
  
 marketCapital = [
        {
          rank: "#1",
          rank_class: "bgl-secondary",
          coin_image: "assets/images/svg/logo_eth.svg",
          name: "Ethereum",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [2,2,2,4,4,5,4,6,5,7,6,8,7,9,8,4,7,6,8,7],
          // variation: "4%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#2",
          rank_class: "bgl-secondary",
          coin_image: "assets/images/svg/logo_btc.svg",
          name: "Bitcoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [2,3,4,5,6,5,4,6,5,7,2,3,4,5,3,2,5,4,5,7],
          // variation: "0.5%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#3",
          rank_class: "bgl-secondary",
          coin_image: "assets/images/svg/logo_mon.svg",
          name: "	Monero",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [2,2,4,3,2,4,3,3,4,2,1,3,2,4,2,3,5,4,3,2],
          // variation: "0.45%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#4",
          rank_class: "",
          coin_image: "assets/images/svg/logo_lit.svg",
          name: "Litecoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [6,2,3,2,3,5,3,3,7,2,4,7,5,1,3,6,5,9],
          // variation: "0.4%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#5",
          rank_class: "",
          coin_image: "assets/images/svg/logo_eth.svg",
          name: "Ethereum",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [6,2,3,2,3,5,4,3,2,2,4,5,2,5,5,4,3,1,3,4,5,6],
          // variation: "0.7%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#6",
          rank_class: "",
          coin_image: "assets/images/svg/logo_btc.svg",
          name: "XRP",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [6,2,3,2,1,5,4,3,2,2,1,2,2,5,4,4,3,5,3,4,5,6],
          // variation: "0.5%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#7",
          rank_class: "",
          coin_image: "assets/images/svg/logo_lit.svg",
          name: "Litecoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [6,2,3,1,5,4,5,2,1,1,2,5,1,4,2,2,3,5,3,4,5,6],
          // variation: "0.4%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#8",
          rank_class: "",
          coin_image: "assets/images/svg/logo_btc.svg",
          name: "Bitcoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [1,2,3,1,4,2,4,2,2,1,2,5,1,4,1,1,5,4,3,2,4,2],
          // variation: "0.5%",
          // variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#9",
          rank_class: "",
          coin_image: "assets/images/svg/logo_eth.svg",
          name: "Ethereum",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          graph_series: [1,2,3,1,4,2,4,2,2,1,2,5,1,2,1,1,3,2,3,2,4,2],
          // variation: "0.45%",
          // variation_class: "fa-caret-up text-success",
        },
  ];

  ngOnInit(): void {
  }

}
