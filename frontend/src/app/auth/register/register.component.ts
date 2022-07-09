import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  response: any = {}

  constructor(private httpService: HttpService, private router: Router) { 

  }

  ngOnInit(): void {
   
  }

  
  registerUser(){
    this.httpService.registerUser(this.userObj).subscribe((resp) => {
      this.response = resp;
      if(this.response.message == 'Registration successful'){
          this.router.navigate(['/auth/login']);
      }else{
        alert(this.response.message);
      }
    });
    
  }

}
