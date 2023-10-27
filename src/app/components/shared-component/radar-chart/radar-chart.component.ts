import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
})
export class RadarChartComponent implements OnInit {
  constructor() {}

  public chart: any;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 500);
  }

  /**
   * Used for create a new Chart
   */
  createChart() {
    const data = {
      labels: [
        'Scheduled',
        'Cancelled',
        'Rescheduled',
        'Expediated',
        'Cloned',
        'Suspended',
      ],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
      ],
    };

    this.chart = new Chart('MyChart5', {
      type: 'radar', //this denotes tha type of chart

      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    });
  }
}
