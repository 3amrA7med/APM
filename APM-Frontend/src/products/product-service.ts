import { Injectable } from "@angular/core";
import { IProduct } from './products';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ProductService {
    private productUrl = 'http://localhost:8080/api/v1/product';
    
    constructor(private http: HttpClient){    }
    getProducts() : Observable<Product[]>{
      return this.http.get<IProduct>(this.productUrl).pipe(
        map(data =>  data._embedded.products),
        catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse){
      let errorMessage = "";
      if(err.error instanceof ErrorEvent)
      {
        errorMessage = `An error occuared: ${err.error.message}`;
      }
      else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}