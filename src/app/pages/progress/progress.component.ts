import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    'progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {

  private _progreso: number = 50;

  ngOnInit(): void {
  }

  constructor() {
  }

  get progreso(): number {
    return this._progreso;
  }

  set progreso(value: number) {
    this._progreso = value;
  }

}
