import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  navItems: any[] = [
    {
      text: 'Inventory',
      link: '/client/itemcard',
      icn: '-bag'
    },
    {
      text: 'Market',
      link: '/client/market',
      icn: '-shop-window'
    },
    {
      text: 'Cart',
      link: '/client/cart',
      icn: '-cart4'
    },
    {
      text: 'Report',
      link: '/client/report',
      icn: '-card-list'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
