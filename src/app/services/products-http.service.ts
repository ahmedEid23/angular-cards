import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface Card {
  image: string,
  title: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  constructor(private http: HttpClient) {


  }

  getProducts(count: number = 10): Observable<Card[]> {
    return this.http.get(`https://fakestoreapi.com/products?limit=${count}`).pipe(
      tap(console.log)
    )
  }


}
