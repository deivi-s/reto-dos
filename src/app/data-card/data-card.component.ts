import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',  
  styleUrls: [ './data-card.component.css' ]
})
export class DataCardComponent implements OnInit {

  
  tarjeta_credito: number = 0;
  mes: number = 0;
  anio: number = 0;
  ccv: number = 0;
  titular: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
