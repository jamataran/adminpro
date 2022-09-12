import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartEvent, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {


  public labels: string[] = ['Jamón', 'Chorizo', 'Otros embutidos'];
  public data: number[][] =[
    [ 350, 450, 100 ],
    [ 50, 150, 120 ],
    [ 250, 130, 70 ]
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
