import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'history',
  templateUrl: './history.html',
  styleUrls: ['./history.scss']
})

export class HistoryComponent {
    from: Date = new Date()
    to: Date = new Date()
    title: string
    category: any
    spends: any = []

    constructor(private budgetService: BudgetService, private _location: Location, private route: ActivatedRoute) {
        this.category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        
        this.title = this.category.value
    }

    //allow only monthly view
    //disable dates bigger or lower than  ---- smth like validate range
    //when date is changed update period
    getAllSpendsPerPeriod() : BuyingItem[] {
        if (this.category === null) return []
        if (!this.from || !this.to) return []

        console.log('getAllSpendsPerPeriod')
        this.budgetService.getAllSpends(this.category.value, this.from, this.to).on('value', result => {
             this.spends = this._getValidSpendsArray(result.val())
        })
    }

    backClicked() {
        this._location.back();
    }

    private _getValidSpendsArray(value) {
        return value ? value
            .filter(x => x && x.group.toLowerCase() === this.category.value.toLowerCase())
            .map(x => {
                x.dateString =  new Date(x.date).toLocaleDateString()
                return x
            }) : []       
    }
}