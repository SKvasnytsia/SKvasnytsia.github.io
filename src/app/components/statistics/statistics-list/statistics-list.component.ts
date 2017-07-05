import { Component, ViewEncapsulation, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics-list',
  templateUrl: './statistics-list.html',
  styleUrls: ['./statistics-list.scss']
})

export class StatisticsListComponent {
    @Input() spends: any[]
    @Input() totals: number
    @Input() totalLabel: string

    constructor(){
        console.log('StatisticsListComponent', this.spends)
    }


}