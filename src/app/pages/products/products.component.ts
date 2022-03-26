import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-products',
  template: `
  <section class="products">
    <app-product 
        (addToCartClick)="addToCart($event)"
        [product]="product" 
        *ngFor="let product of products">
    </app-product>
  </section>`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(
    private producSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.producSvc.getProducts()
    .pipe(
      //Es una peticion al JSON Server
      tap( (products: Product[]) => this.products = products )
    )
    .subscribe()
  }

  addToCart(product: Product):void{
    console.log('Add to cart',product);
    this.shoppingCartSvc.updateCart(product);
  }

}
