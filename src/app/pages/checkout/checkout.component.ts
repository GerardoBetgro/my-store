import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from '../products/interfaces/stores.interface';
import { DataService } from '../products/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model = {
    name: '',
    store: ' ',
    shippingAddress: '',
    city: '',
  }

  //Resolvemos la problematica de inicializar la variable con el !
  isDelivery:boolean = false;

  stores: Store[] = []

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void {
    this.isDelivery = value;
  }

  onSubmit(): void {
    console.log('Saving...');
  }

  private getStores(): void {
    this.dataSvc.getStores()
      .pipe(
        tap((stores: Store[]) => this.stores = stores))
      .subscribe()
  }

}
