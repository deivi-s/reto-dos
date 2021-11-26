import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {

  
  tarjeta_credito: number;
  mes: number;
  anio: number;
  ccv: number;
  titular: string;

  constructor() { }

  ngOnInit(): void {
  
  }

}
