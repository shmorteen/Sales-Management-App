import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/utility/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any = {
    uname: '',
    pword: ''
  };

  response: any = {};
  users: any[] = [];

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
    
  }

  login({uname, pword}: any){
    this.httpService.logUserIn({uname, pword}).subscribe((res) => {
      this.response = res;
      if(this.response.data == true){
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        localStorage.setItem('token', token);
          this.router.navigate(['/client']);
      }else{
        alert(this.response.message);
      }
    });
  }

}
