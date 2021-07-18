import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {  Observable, throwError } from 'rxjs';
import { Dealer } from '../dealer/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  addDealer(dealer: Dealer): Observable<Dealer>
  {
    return this.http.post<Dealer>('http://66.113.235.103/api/dealer', dealer);
  }

}