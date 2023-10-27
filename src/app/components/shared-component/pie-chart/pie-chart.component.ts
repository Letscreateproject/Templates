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
    // this.createChart();
  }
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
          data: [300, 50, 100, 30, 500, 10],

          hoverOffset: 4,
        },
      ],
    };

    this.chart = new Chart('MyChart3', {
      type: 'doughnut', //this denotes tha type of chart

      data: data,
      options: {
        aspectRatio: 1,
        cutout: 150,
      },
    });
  }
}
