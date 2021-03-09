import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { LoggerService } from '../loggerservice/logger.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private logger: LoggerService) { }

  public getProducts() {
    this.logger.log('getProducts Called');
    let products: Product[];
    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pan Drive', 750),
      new Product(3, 'Power Bank', 100),
    ]
    this.logger.log(products);
    return products;

  }
}
