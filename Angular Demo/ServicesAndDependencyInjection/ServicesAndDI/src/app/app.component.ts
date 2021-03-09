import { Component } from '@angular/core';
import { Product } from './product/product';
import { ProductService } from './product-service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Services And DI';
  products!: Product[];
  //productService: any;

  constructor(private productService: ProductService) {
    // this.productService = new ProductService();
  }

  getProductList() {
    this.products = this.productService.getProducts();
  }
}
