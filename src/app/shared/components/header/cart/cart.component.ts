import { Component } from "@angular/core";
import { ShoppingCartService } from "src/app/pages/products/services/shopping-cart.service";

@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
        <ng-container *ngIf="dataCart.total">
            <mat-icon>add_shopping_cart</mat-icon>
            <span class="align-icon">
                {{ dataCart.total | currency }}
                ({{ dataCart.quantity }})
            </span>
        </ng-container>    
    </ng-container>
    `,
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
    cart$ = this.shoppingCartSvc.cartAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    quantity$ = this.shoppingCartSvc.quantityAction$;

    constructor(private shoppingCartSvc: ShoppingCartService){ }
 }