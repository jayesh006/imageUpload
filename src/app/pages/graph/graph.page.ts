import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('barChart',{static:true}) barChart;

  bars: any;
  colorArray: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createBarChart();
  }


  createBarChart() {
    let ctx = this.barChart.nativeElement;
    ctx.height= 400;
    this.bars = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 58],
          backgroundColor: this.generateColorArray(9), // array should have same number of elements as number of dataset
          borderColor: this.generateColorArray(9),// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    return this.colorArray;
  }


}
