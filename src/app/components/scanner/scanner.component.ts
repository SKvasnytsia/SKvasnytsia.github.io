import { Component, ViewEncapsulation, Injectable } from '@angular/core';
//import { DialogComponent, DialogService } from "ng2-bootstrap-modal"
///////models///////
import { BuyingItem, CATEGORIES } from '../../common/models/index'

import { TranslationService } from '../../services/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'scanner',
  templateUrl: './scanner.html',
  styleUrls: ['./scanner.scss']
})

export class ScannerComponent {
    list = CATEGORIES
    title: string

    constructor(private translateService: TranslationService) {
        this.title = translateService.get('addGoods')
    }

    /**
     * Save Buying Item
     */
    saveBuyingItem() {
        let item = new BuyingItem('', new Date())
        //category add item
    }

    close() {

    }
}
