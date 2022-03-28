import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
    <h1 class="title">Thank You!</h1>
    <p class="content">
        Your order is on the way!
    </p>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae ducimus consectetur necessitatibus,
        laboriosam totam unde veniam ipsam quia sequi, dolorum aliquid omnis magnam deserunt accusantium quibusdam quasi
        repellendus iure.
    </span>
  </div>  
  `,
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent { }
