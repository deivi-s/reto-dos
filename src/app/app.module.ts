import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { DataCardComponent } from './data-card/data-card.component';
import { FormCardComponent } from './form-card/form-card.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,   
    CardComponent,
    DataCardComponent,
    FormCardComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent, 
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
