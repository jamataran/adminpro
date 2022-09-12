import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartEvent, ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() titulo: String = 'Grafica';
  @Input() public labels: string[] = [];
  @Input() public data: number[][] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: undefined,
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {
  }

  ngOnInit(): void {
    this.createDataObject();
  }

  createDataObject(): void {
    if (this.data.length > 0) {
      this.data.forEach((data: number[]) => {
        this.doughnutChartData.datasets.push({'data': data});
      });
      this.doughnutChartData.labels = this.labels;
    }
  }

  // Doughnut


  // events
  public chartClicked({event, active}: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
