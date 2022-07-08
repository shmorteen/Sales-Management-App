import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/utility/http.service';

@Component({
  selector: 'app-reportsales',
  templateUrl: './reportsales.component.html',
  styleUrls: ['./reportsales.component.css']
})
export class ReportsalesComponent implements OnInit {
  report: any[]=[];
  response: any = {};
  i: any = 0;
  date: any = 0;
  expReturn = 0;
  exp: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    
  }

  getAllReport(index: number){
    this.i = index;
    this.httpService.getReport().subscribe((resp) => {
      this.response = resp;
      let lastIt = [...this.response].pop();
      this.report = lastIt.items;
      let dt = this.response[this.i].createdAt;
      this.date = dt.split('T');
      this.exp = true;
    })
    this.getExpR();
  }

  getExpR(){
    this.expReturn = JSON.parse(String(localStorage.getItem('expR')));
  }
}
