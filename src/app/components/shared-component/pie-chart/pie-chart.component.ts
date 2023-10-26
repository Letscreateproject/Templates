import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
    /**
   * Used for create a new Chart
   */
  createChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    this.chart = new Chart('MyChart3', {
      type: 'doughnut', //this denotes tha type of chart

      data: data,
      options: {
        aspectRatio: 1.5,
      },
    });
  }
}
