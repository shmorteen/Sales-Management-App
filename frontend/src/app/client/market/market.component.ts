import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { HttpService } from 'src/app/utility/http.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  marketItem: any = [];
  cart: any = [] ;
  cartObject: any ={};
  response: any = {};
  itemId: any = 0;
  newCartArray: any =[];
  carts: any = {};
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getItems();
  }

  addItems(index: number, market: any){
    let i = index;
    market.quantityOut = 1;
    let quantity = market.quantityIn - market.quantityOut;
    market.quantityIn = quantity;
    this.carts = market;
    this.cart.push(this.carts);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getItems(){
    this.httpService.getAllItems().subscribe((resp) => {
      this.response = resp;
      this.marketItem =  this.response;
    })
  }
 
}


