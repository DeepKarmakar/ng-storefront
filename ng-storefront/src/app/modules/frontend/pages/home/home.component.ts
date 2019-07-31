import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../../../core/services/product.service';
import { FormsModule } from '@angular/forms';
import { CartDataService } from '../../../../core/services/cart-data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'image', 'name', 'description', 'price', 'stock', 'action'];
  dataSource;
  message: string = "Hola Mundo!";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  productList = [];

  addedProduct = [];

  cartItems = {}

  hideActionBtn;

  sampleForm = {};

  constructor(private _productService: ProductService, private _cartService: CartDataService, private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.hideActionBtn = {}; // init is required
    // this._productService.getProducts()
    //   .subscribe(
    //     res => {
    //       this.productList = res;
    //       this.dataSource = new MatTableDataSource(this.productList);
    //       this.dataSource.paginator = this.paginator;
    //     },
    //     err => console.log(err)
    //   )
    this.productList = products;
    this.dataSource = new MatTableDataSource(this.productList);
    this.dataSource.paginator = this.paginator;
  }

  addProduct(productId, productName, productPrice, productStock) {

    this.cartItems[productId] = {
      name: productName,
      qty: 1,
      price: productPrice,
      stock: productStock
    };
    console.log(this.cartItems);
    this._cartService.updateCart(this.cartItems);

  }

  incrProductQty(productId, stock) {
    if (this.cartItems[productId].qty < stock) {
      this.cartItems[productId].qty += 1;
    } else {
      this._snackBar.open('No more stock left', 'close', {
        duration: 2000,
      });
    }
  }

  decrProductQty(productId) {
    if (this.cartItems[productId].qty === 1) {
      this.hideActionBtn[productId] = !this.hideActionBtn[productId];
      delete this.cartItems[productId];
      this._cartService.updateCart(this.cartItems);
    } else {
      this.cartItems[productId].qty -= 1;
    }
  }


}
let products = [
  {
    id: 1,
    name: 'Hydrogen vHydrogen Hydrogen',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 12
  },
  {
    id: 2,
    name: 'Helium',
    description: 'lorem ipsum dolar',
    price: 10,
    stock: 10
  },
  {
    id: 3,
    name: 'Lithium',
    description: 'lorem ipsum dolar',
    price: 30,
    stock: 140
  },
  {
    id: 4,
    name: 'Beryllium',
    description: 'lorem ipsum dolar',
    price: 20,
    stock: 120
  },
  {
    id: 5,
    name: 'Boron',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 0
  },
  {
    id: 6,
    name: 'Carbon',
    description: 'lorem ipsum dolar',
    price: 400,
    stock: 20
  },
  {
    id: 7,
    name: 'Nitrogen',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 140
  },
  {
    id: 8,
    name: 'Oxygen',
    description: 'lorem ipsum dolar',
    price: 50,
    stock: 170
  },
  {
    id: 9,
    name: 'Fluorine',
    description: 'lorem ipsum dolar',
    price: 14,
    stock: 144
  },
  {
    id: 10,
    name: 'Neon',
    description: 'lorem ipsum dolar',
    price: 70,
    stock: 130
  },
  {
    id: 11,
    name: 'Sodium',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 140
  },
  {
    id: 12,
    name: 'Magnesium',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 140
  },
  {
    id: 13,
    name: 'Aluminum',
    description: 'lorem ipsum dolar',
    price: 110,
    stock: 110
  },
  {
    id: 14,
    name: 'Silicon',
    description: 'lorem ipsum dolar',
    price: 70,
    stock: 240
  },
  {
    id: 15,
    name: 'Phosphorus',
    description: 'lorem ipsum dolar',
    price: 75,
    stock: 140
  },
  {
    id: 16,
    name: 'Sulfur',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 140
  },
  {
    id: 17,
    name: 'Chlorine',
    description: 'lorem ipsum dolar',
    price: 40,
    stock: 140
  },
  {
    id: 18,
    name: 'Argon',
    description: 'lorem ipsum dolar',
    price: 33,
    stock: 110
  },
  {
    id: 19,
    name: 'Potassium',
    description: 'lorem ipsum dolar',
    price: 80,
    stock: 130
  },
  {
    id: 20,
    name: 'Calcium',
    description: 'lorem ipsum dolar',
    price: 400,
    stock: 140
  },
]
