import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = "api/products/products.json"
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + data)),
      catchError(this.handleError)
    )
  }
  constructor(private http: HttpClient) {

  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occured: ${err.error.message}`
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)
    return throwError(errorMessage)
  }


}
