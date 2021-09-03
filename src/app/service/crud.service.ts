import { Injectable } from '@angular/core';
import { Data } from './Data';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node Express API
  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Error Handle
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // Add Data Service
  AddData(data: Data): Observable<any> {
    let API_URL = `${this.REST_API}/add-data`;
    return this.httpClient.post(API_URL, data).pipe(
      catchError(this.handleError)
    )
  }

  // Get All Data
  GetDatas() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get Single Data
  GetData(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-data/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Update Data
  updateData(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-data/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

  // Delete Data
  deleteData(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-data/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }
}
