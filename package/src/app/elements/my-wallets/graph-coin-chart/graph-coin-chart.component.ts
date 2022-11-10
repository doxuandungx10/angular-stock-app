import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  responsive: ApexResponsive[] | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-graph-coin-chart',
  templateUrl: './graph-coin-chart.component.html',
  styleUrls: ['./graph-coin-chart.component.css']
})
export class GraphCoinChartComponent implements OnInit {

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
            {
                name: "New Clients",
                data: [300, 450, 600, 600, 400, 450, 410, 470, 480, 700, 600, 800, 400, 600, 350, 250, 500, 550, 300, 400, 200]
            }
      ],
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        toolbar: {
            show: false
        },
        offsetX: -10,
      },
        plotOptions: {
            bar: {
                columnWidth: "28%",
                
                colors: {
                    backgroundBarColors: ['#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9','#E9E9E9','#E9E9E9','#E9E9E9','#E9E9E9','#E9E9E9','#E9E9E9','#E9E9E9','#E9E9E9'],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 5,
                },

            },
            // distributed: true
        },
        colors:['#B87EFF'],
        grid: {
            show: false,
        },
        legend: {
            show: false
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
            enabled: false,
            dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 1,
              opacity: 1
            }
        },
        /* stroke: {
			show: true,
          width: 3,
          colors: ['transparent']
        }, */
		
        xaxis: {
         categories: ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'],
          labels: {
           style: {
              colors: '#808080',
              fontSize: '13px',
              fontFamily: 'poppins',
              fontWeight: 100,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          crosshairs: {
            show: false,
          },
          axisBorder: {
              show: false,
            },
			axisTicks: {
              show: false,
            },
        },
        yaxis: {
        show:true,	
        labels: {
            offsetX: -15,
           style: {
              colors: '#808080',
              fontSize: '14px',
               fontFamily: 'Poppins',
              fontWeight: 100,
              
            },
             formatter: function (y:any) {
                      return y.toFixed(0) + "k";
                    }
          },
        },
        tooltip: {
            x: {
                show: true
            }
        },
         responsive: [{
            breakpoint: 575,
            options: {
                chart: {
                    height: 250,
                }
            }
         }]
    };
  }
  ngOnInit(): void {
  }

}
