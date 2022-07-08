import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from 'src/app/utility/http.service';


@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit {
  motherItem: any= [];
  itemObject = {
    itemname: '',
    price: 0,
    quantityIn: 0,
    quantityOut: 0
  };
  expReturn = 0;
  response: any = {};
  repp: any = {};
  newArray: any []=[];


  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getItems();
  }
  
  saveItem(){
    if (this.itemObject.itemname != '' &&
    this.itemObject.price != 0 &&
    this.itemObject.quantityIn != 0 &&
    this.itemObject.quantityOut == 0 ){
    this.httpService.addItems(this.itemObject).subscribe((resp) => {
      this.response = resp;
      if(this.response){
        alert(this.response.message);
      }else{
        alert(this.response.message);
      }
    });
  }else{
    alert('Fill missing Fields')
  }
      this.getItems();
      this.getExp();
  }
  
  getItems(){
     this.httpService.getAllItems().subscribe((resp) => {
      this.repp = resp;
      this.motherItem = this.repp;
    })
  }

  getExp(){
    this.motherItem.map((item: { price: number; quantityIn: number; })=>{
      let expTot = item.price * item.quantityIn;
      this.expReturn += expTot;
    })
    localStorage.setItem('expR', JSON.stringify(this.expReturn));
  }
}


