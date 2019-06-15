import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = "http://localhost:4000/api/products";

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get<any>(this._productUrl);
  }
}
