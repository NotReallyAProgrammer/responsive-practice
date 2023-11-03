import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const myChart = new Chart('donut', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [28, 22, 36, 13],
            backgroundColor: [
              'rgb(36, 175, 181)',
              'hsla(182, 67%, 42%, 0.2)',
              'hsla(0, 0%, 86%, 1)',
              'hsla(0, 0%, 97%, 1)',
            ],

            borderWidth: 1,
          },
        ],
      },
    });
  }
}
