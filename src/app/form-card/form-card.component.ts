import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  tarjeta_credito: number;
  mes: number;
  anio: number;
  ccv: number;
  titular: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
