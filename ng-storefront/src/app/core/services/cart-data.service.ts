import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  private cartSource = new BehaviorSubject('');
  cartMessage = this.cartSource.asObservable();

  constructor() { }

  updateCart(data: any) {
    this.cartSource.next(data);
  }
}
