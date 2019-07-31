import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CartDataService } from '../../../../core/services/cart-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems;
  dataSource;
  displayedColumns = ['item', 'price', 'quantity', 'total'];
  emptyCart;
  subtotal;

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _cartService: CartDataService) { }

  ngOnInit() {
    this.cartItems = Object.values(this._cartService.getCart());
    console.log(this.emptyCart, this.cartItems);
    if (this.cartItems.length === 0) {
      this.emptyCart = true;
    } else {
      this.emptyCart = false;
      this.dataSource = new MatTableDataSource(this.cartItems);
      console.log(this.emptyCart);
    }

    // this.dataSource.paginator = this.paginator;
  }

  getSubtotal() {
    this.subtotal = this.cartItems.map(product => product.qty * product.price).reduce((prev, next) => prev + next);
    return this.subtotal;
  }
}

