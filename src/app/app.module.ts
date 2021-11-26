import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { DataCardComponent } from './data-card/data-card.component';

@NgModule({
  declarations: [
    AppComponent,   
    CardComponent, DataCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
