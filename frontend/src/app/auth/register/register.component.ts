import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/utility/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userObj: any = {
    fullname: '',
    username: '',
    password: ''
  };
  users: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
   
  }

  
  registerUser(){
    this.httpService.registerUser(this.userObj).subscribe((resp) => {
    });
  }

}
