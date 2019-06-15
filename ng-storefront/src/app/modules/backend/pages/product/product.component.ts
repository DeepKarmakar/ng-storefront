import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductService } from '../../../../core/services/product.service';
import { Route, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'stock', 'details', 'update', 'delete'];
  dataSource;

  products = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  fileNameDialogRef: MatDialogRef<AddProductComponent>;


  constructor(public dialog: MatDialog, private _productServeice: ProductService, private _route: Router) { }

  ngOnInit() {

    this._productServeice.getProducts()
      .subscribe(
        res => {
          this.products = res;
          this.dataSource = new MatTableDataSource(this.products);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._route.navigate(['/login']);
            }
          }
        }
      )

    console.log(this.products);
  }

  public redirectToDetails = (id: string) => {
    console.log(id);
  }

  public redirectToUpdate = (id: string) => {
    const dialogRef = this.dialog.open(AddProductComponent);
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  redirectToDelete() {
    const dialogRef = this.dialog.open(DeleteProductComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}

export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
  stock: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen vHydrogen Hydrogen', price: 1.0079, stock: 'H' },
  { id: 2, name: 'Helium', price: 4.0026, stock: 'He' },
  { id: 3, name: 'Lithium', price: 6.941, stock: 'Li' },
  { id: 4, name: 'Beryllium', price: 9.0122, stock: 'Be' },
  { id: 5, name: 'Boron', price: 10.811, stock: 'B' },
  { id: 6, name: 'Carbon', price: 12.0107, stock: 'C' },
  { id: 7, name: 'Nitrogen', price: 14.0067, stock: 'N' },
  { id: 8, name: 'Oxygen', price: 15.9994, stock: 'O' },
  { id: 9, name: 'Fluorine', price: 18.9984, stock: 'F' },
  { id: 10, name: 'Neon', price: 20.1797, stock: 'Ne' },
  { id: 11, name: 'Sodium', price: 22.9897, stock: 'Na' },
  { id: 12, name: 'Magnesium', price: 24.305, stock: 'Mg' },
  { id: 13, name: 'Aluminum', price: 26.9815, stock: 'Al' },
  { id: 14, name: 'Silicon', price: 28.0855, stock: 'Si' },
  { id: 15, name: 'Phosphorus', price: 30.9738, stock: 'P' },
  { id: 16, name: 'Sulfur', price: 32.065, stock: 'S' },
  { id: 17, name: 'Chlorine', price: 35.453, stock: 'Cl' },
  { id: 18, name: 'Argon', price: 39.948, stock: 'Ar' },
  { id: 19, name: 'Potassium', price: 39.0983, stock: 'K' },
  { id: 20, name: 'Calcium', price: 40.078, stock: 'Ca' },
];
