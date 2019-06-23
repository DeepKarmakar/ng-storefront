import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CartDataService } from '../../core/services/cart-data.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {

  cartProducts: any;

  constructor(public _authService: AuthService, private _route: Router, private cartService: CartDataService) { }

  ngOnInit() {
    this.cartService.cartMessage.subscribe(msg => this.cartProducts = Object.values(msg));
  }

  logOut() {
    localStorage.removeItem('token');
    this._route.navigate(['/login'])
  }


}
