import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 50;
  @Input('btn-class') btnClass = 'btn btn-primary';

  @Output('valor') progresoChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  aumentarValor(valor: number) {
    this.progreso = Number(this.progreso + valor);
    this.emitirProgreso();
  }

  onChange(valor: number) {
    debugger;
    this.progreso = valor;

    if (valor > 100)
      this.progreso = 100;

    if (valor < 0)
      this.progreso = 0;

    this.emitirProgreso();
  }

  emitirProgreso() {
    this.progresoChange.emit(this.progreso);
  }

}
