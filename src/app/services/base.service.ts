import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseService {

  constructor(public http: HttpClient) { }

  post(url: string, postBody: object): Observable<any> {
    let header = this.createAuthorizationHeader();
    return this.http.post(url, postBody, { headers: header }).pipe(
      retry(0),
      map((response) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  createAuthorizationHeader() {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return headers;
  }

  handleError(error) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
