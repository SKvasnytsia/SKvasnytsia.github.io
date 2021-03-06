import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'


import { 
    BudgetService,
    TranslationService,
    StatisticsCacheService
 } from "../../../services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'
import { DateCalculationHelper } from '../../../common/index'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'history',
    templateUrl: './history.html',
    styleUrls: ['./history.scss']
})

export class HistoryComponent implements OnInit {
    from: Date
    to: Date
    title: string
    category: any
    spends: any = []
    statisticsTranslation: any
    loading = false

    constructor(private budgetService: BudgetService,
            private cacheService: StatisticsCacheService, 
            private _location: Location, 
            private route: ActivatedRoute, 
            private translationService: TranslationService) {
        this.category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        this.title = this.category.value
        this.statisticsTranslation = translationService.getAllForComponent('statistics')
        this.currentMonthSpendsSetup()
        
    }

    ngOnInit() {
        let fromString = this.route.snapshot.paramMap.get('from')
        let toString = this.route.snapshot.paramMap.get('to')

        if (fromString) 
            this.from = new Date(fromString)
        if (toString)
            this.to = new Date(toString)
   }
   currentMonthSpendsSetup() {
        const { from, to } = DateCalculationHelper.getStartAndEndDatesPerMonth(new Date())
        this.from = from
        this.to = to
        this.getAllSpendsPerPeriod()
   }

    dateUpdated($event) {
        this[$event.type] = $event.value
        this.getAllSpendsPerPeriod()
    }
    //disable dates bigger or lower than  ---- smth like validate range
    getAllSpendsPerPeriod() : BuyingItem[] {
        if (this.category === null) return []
        if (!this.from || !this.to || this.to.getTime() < this.from.getTime()) return []
        let dateRanges = DateCalculationHelper.separateToMonthlyRanges(this.from, this.to)
        this.loading = true
        Promise.all([...dateRanges.map(range => 
          this.cacheService.getCache(range.from, range.to))])
          .then(results => {
              if (!results.length && results.every(x => !x.length)) {
                this.budgetService.getAllSpends(this.from, this.to).subscribe(res => {
                    res.query.on('value', result => {
                        this.spends = this._getValidSpendsArray(result.val(), this.category.value)
                        this.cacheService.addOrUpdateCache(this.spends, this.from, this.to, this.category.value, res.id)
                    })
                })
                
              } else {
                this.spends = this._getValidSpendsArray([].concat(...results), this.category.value)
              }
          })
    }

    backClicked() {
        this._location.back();
    }

    private _getValidSpendsArray(value, activeCategoryValue) {
        this.loading = false
        return value ? value
            .filter(x => x && x.group.toLowerCase() === activeCategoryValue.toLowerCase())
            .map(x => {
                x.dateString =  new Date(x.date).toLocaleDateString()
                return x
            }) : []       
    }
}