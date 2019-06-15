import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  // constructor() { }

  addProduct(val) {
    console.log(val);

  }
  model: Signup = new Signup('', '', null, null, '');

}
class Signup {
  constructor(public name: string = '',
    public description: string = '',
    public price: number,
    public quantity: number,
    public limit: string = '') {
  }
}
