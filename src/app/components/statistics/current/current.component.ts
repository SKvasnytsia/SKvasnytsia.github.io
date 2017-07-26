import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { 
    BudgetService,
    TranslationService,
    StatisticsCacheService
 } from "../../../services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'
import { DateCalculationHelper } from '../../../common/index'

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

    constructor(private budgetService: BudgetService, 
        private cacheService: StatisticsCacheService,
        private route: ActivatedRoute, 
        private translationService: TranslationService) {
        this.category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        this.title = this.category.value
        this.statisticsTranslation = translationService.getAllForComponent('statistics')
    }

    ngOnInit() {
        this.getAllSpendsPerCurrentMonth()
        this.getAllSpendsPerPreviousMonth()
    }
    private _getSpendsCaller (from, to, group, spends, spendResultCaller) {
        this.budgetService.getAllSpends(from, to).on('value', result => {
            const value = result.val()
            spendResultCaller(value, group)
            this.cacheService.addOrUpdateCache(spends, from, to, group)
        })
    }
  
    getAllSpendsPerCurrentMonth() : BuyingItem[] {
        const getSpendsResultCaller = (value, group) => {
            this.spendsForCurrentMonth = this._getValidSpendsArray(value, group)
            this.currentSpendTotals = this._getTotals(this.spendsForCurrentMonth)
        }

        if (this.category === null) return []
        const { from, to } = DateCalculationHelper.getStartAndEndDatesPerMonth(new Date())
        this.cacheService.getCache(from, to).then(cache => {
            if(cache.target.result)
                getSpendsResultCaller([].concat(cache.target.result), this.category.value)
            else 
                this._getSpendsCaller(from, to, this.category.value, this.spendsForCurrentMonth, getSpendsResultCaller)
        })
    }

    getAllSpendsPerPreviousMonth() : BuyingItem[] {
        const getSpendsResultCaller = (value, group) => {
            this.spendsForPreviousMonth = this._getValidSpendsArray(value, group)
            this.previousSpendTotals = this._getTotals(this.spendsForPreviousMonth)
        }
        if (this.category === null) return []
        const { from, to } = DateCalculationHelper.getStartAndEndDatesPerMonth(this._getPreviousMonthDate(new Date()))
        this.cacheService.getCache(from, to).then(cache => {
            if(cache.target.result)
                getSpendsResultCaller([].concat(cache.target.result), this.category.value)
            else 
                this._getSpendsCaller(from, to, this.category.value, this.spendsForPreviousMonth, getSpendsResultCaller)
        })
    }

    private _getTotals(value) {
        return value.reduce((previous, current) => previous += 
        +current.price, 0)
    }

    private _getValidSpendsArray(value, categoryValue) {
        return value ? value
            .filter(x => x && x.group.toLowerCase() === categoryValue.toLowerCase())
            .map(x => {
                x.dateString =  new Date(x.date).toLocaleDateString()
                return x
            }) : []       
    }

    _getPreviousMonthDate(date: Date) {
        date.setDate(1)
        date.setMonth(date.getMonth() - 1)
        return date
    }
}