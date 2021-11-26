import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html'
})
export class DataCardComponent implements OnInit {

  
  tarjeta_credito: number;
  mes: number;
  anio: number;
  ccv: number;
  titular: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
