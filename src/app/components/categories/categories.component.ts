import { Component, ViewEncapsulation, EventEmitter, Input, Output, Injectable, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { 
    AuthService,
    StatisticsCacheService,
    BudgetService,
    TranslationService
 } from "../../services/index"

import { CATEGORIES } from '../../common/models/index'
import { DateCalculationHelper } from '../../common/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss']
})

export class CategoryComponent implements OnInit{

  public list: Array<any> = CATEGORIES
  public title: string
  public category: string
  private activeCategory: string
  private key: string = 'categories'
  public totalsPerCurrentMonth: Object = {}
  public dataTotals: any[]
  public totals: number = 0
 
  constructor (
        private authService: AuthService,
        private cacheService: StatisticsCacheService,
        private budgetService: BudgetService,
        private translationService: TranslationService, 
        private router: Router) {
    const translations = translationService.getAllForComponent(this.key)
    
    this.title = translations.title
  }

  ngOnInit() {
    this.getAllSpendsPerCurrentMonth()
  }

  getStatistics(category: string) {
    this.activeCategory = category
    this.router.navigate([`/statistics/${category}`])
  }

  private _getTotalsForCurrentMonth(spendsArray) {
    const _getTotals = (group) => {
      return spendsArray.reduce((prev, current) => {
          return current.group === group 
            ? prev + current.price 
            : prev 
      }, 0)
    }

    this.dataTotals = this.list.map(x => {
      const totals = spendsArray ? _getTotals(x.value) : 0
      this.totals += totals
      return [ x.value, totals ]
    })
    this.totalsPerCurrentMonth = this.dataTotals.reduce((prev, current) => {
      prev[current[0]] = current[1]
      return prev
    }, {})
    
  }

  private _getSpendsCaller (from, to) {
    this.budgetService.getAllSpends(from, to).subscribe(res =>{
        res.query.on('value', result => {
            const value = result.val(),
              arr = DateCalculationHelper.transformObjectToArray(value)

            this._getTotalsForCurrentMonth(arr)
        })
    })
  }
  
  getAllSpendsPerCurrentMonth() {
    const { from, to } = DateCalculationHelper.getStartAndEndDatesPerMonth(new Date())
    
    this.cacheService.getCache(from, to).then(cache => {
        if(cache.length)
          this._getTotalsForCurrentMonth(cache)
        else 
          this._getSpendsCaller(from, to)
    })
  }

  add(categoryValue) {
    this.router.navigate(['/add', { category:categoryValue}])
  }

  signOut() {
    this.authService.signOut()
    this.router.navigate(['/login'])
  }
}
