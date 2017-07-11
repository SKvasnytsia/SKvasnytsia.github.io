import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "../../../services/index"

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
    statisticsTranslation: any

    constructor(private budgetService: BudgetService, private route: ActivatedRoute, private translationService: TranslationService) {
        this.category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        this.title = this.category.value
        this.statisticsTranslation = translationService.getAllForComponent('statistics')
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
            this.currentSpendTotals = this._getTotals(this.spendsForCurrentMonth)
        })
    }

    getAllSpendsPerPreviousMonth() : BuyingItem[] {
        if (this.category === null) return []
        const { from, to } = this._getStartAndEndDatesPerMonth(this._getPreviousMonthDate(new Date()))

        this.budgetService.getAllSpends(this.category.value, from, to).on('value', result => {
            const value = result.val()

            this.spendsForPreviousMonth = this._getValidSpendsArray(value)
            this.previousSpendTotals = this._getTotals(this.spendsForPreviousMonth)
        })
    }

    private _getTotals(value) {
        return value.reduce((previous, current) => previous += 
        +current.price, 0)
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
    _getStartAndEndDatesPerMonth(date: Date) {
        const year = date.getFullYear(),
            month = date.getMonth()

        return { 
            from : new Date(year, month, 1), 
            to: new Date(year, month + 1, 0) 
        }
    }

    //add test to this method
    _getPreviousMonthDate(date: Date) {
        date.setDate(1)
        date.setMonth(date.getMonth() - 1)
        return date
    }
}