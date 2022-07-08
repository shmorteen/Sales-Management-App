import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllItems(){
    return this.http.get('http://localhost:3000/all-items')
    .pipe(
      catchError(this.handleError('getAllItems'))
    );
  }
  getReport(){
    return this.http.get('http://localhost:3000/get-report')
    .pipe(
      catchError(this.handleError('getReport'))
    );
  }
  addItems(data: any){
    return this.http.post('http://localhost:3000/add-item', data)
    .pipe(
      catchError(this.handleError('addItems'))
    );
  }
  processOrder(cart: any){
    return this.http.post('http://localhost:3000/add-cart', {cart})
    .pipe(
      catchError(this.handleError('add new item'))
    );
  }
  registerUser(data: any){
    return this.http.post('http://localhost:3000/register', data)
    .pipe(
      catchError(this.handleError('registerUser'))
    );
  }
  addToCart(data: any){
    return this.http.post('http://localhost:3000/add-cart', data)
    .pipe(
      catchError(this.handleError('addToCart'))
    );
  }

  logUserIn(data: any){
    return this.http.post('http://localhost:3000/login', data)
    .pipe(
      catchError(this.handleError('logUserIn'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
