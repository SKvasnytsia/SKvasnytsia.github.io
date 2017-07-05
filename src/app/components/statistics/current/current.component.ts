import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'current',
  templateUrl: './current.html',
  styleUrls: ['./current.scss']
})

export class CurrentComponent {
    title: string
    category: any
    spendsForCurrentMonth: any[] = []
    spendsForPreviousMonth: any[] = []
    currentSpendTotals: number
    previousSpendTotals: number

    constructor(private budgetService: BudgetService, private route: ActivatedRoute) {
        this.category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        this.title = this.category.value
    }

    ngOnInit() {
        this.getAllSpendsPerCurrentMonth()
        this.getAllSpendsPerPreviousMonth()
    }

    getAllSpendsPerCurrentMonth() : BuyingItem[] {
        if (this.category === null) return []
        const { from, to } = this._getStartAndEndDatesPerMonth(new Date())

        this.budgetService.getAllSpends(this.category.value, from, to).on('value', result => {
            const value = result.val()

            this.spendsForCurrentMonth = this._getValidSpendsArray(value)
        })
    }

    getAllSpendsPerPreviousMonth() : BuyingItem[] {
        if (this.category === null) return []
        const { from, to } = this._getStartAndEndDatesPerMonth(this._getPreviousMonthDate())

        this.budgetService.getAllSpends(this.category.value, from, to).on('value', result => {
            const value = result.val()

            this.spendsForPreviousMonth = this._getValidSpendsArray(value)
        })
    }

    private _getValidSpendsArray(value) {
        return value ? value
            .filter(x => x && x.group.toLowerCase() === this.category.value.toLowerCase())
            .map(x => {
                x.dateString =  new Date(x.date).toLocaleDateString()
                return x
            }) : []       
    }

    //add test to this method
    private _getStartAndEndDatesPerMonth(date: Date) {
        const year = date.getFullYear(),
            month = date.getMonth()

        return { 
            from : new Date(year, month, 1), 
            to: new Date(year, month + 1, 0) 
        }
    }

    //add test to this method
    private _getPreviousMonthDate() {
        let date = new Date()

        date.setDate(1)
        date.setMonth(date.getMonth() - 1)

        return date
    }
}