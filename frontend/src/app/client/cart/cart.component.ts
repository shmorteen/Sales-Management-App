import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/utility/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  allItems : any = [];
  sales: any = [];
  response: any ={};

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
    this.getcartItems();
  }


  getcartItems(){
   this.cartItems = JSON.parse(String(localStorage.getItem('cart')));
  }


  addtoItem(index: number){
    let i = index;
    if(this.cartItems[i].quantityOut < this.cartItems[i].quantityIn){
      this.cartItems[i].quantityOut++;
    } else {
      alert('Out of Stock');
    }
  }


  removeItem(index: number){
    let i = index;
    if(this.cartItems[i].quantityOut > 1){
      this.cartItems[i].quantityOut--;
    }
  }


  deleteCart(index: number){
    this.cartItems.splice(index, 1);
  }

  
  getTotal(){
    let grandtotal = 0;
    this.cartItems.map((item: any) => {
      let total = item.price * item.quantityOut;
      grandtotal += total;
    })
    return grandtotal;
  }


  processOrder(){
      this.httpService.processOrder(this.cartItems).subscribe((resp:any)=>{
        if(resp.message == 'success'){
          let newCart : any = [];
          localStorage.setItem('cart', newCart);
          this.router.navigate(['/client/report']);
        }
     })
  }

}
