import { Component, ViewEncapsulation, Injectable } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'price-list',
  templateUrl: './priceList.html',
  styleUrls: ['./priceList.scss']
})

@Injectable()
export class PriceListComponent {
  list = [];
}
