import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ItemcardComponent } from './itemcard/itemcard.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { ReportsalesComponent } from './reportsales/reportsales.component';



@NgModule({
  declarations: [
  ClientComponent,
  ItemcardComponent,
  MarketComponent,
  CartComponent,
  ReportsalesComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClientRoutingModule
  ],
  providers: [],
  bootstrap: [ClientComponent]
})
export class ClientModule { }
