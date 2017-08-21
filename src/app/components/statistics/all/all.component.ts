import { Component, ViewEncapsulation, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { 
    BudgetService,
    TranslationService,
    StatisticsCacheService
 } from "../../../services/index"

import { BuyingItem, CATEGORIES, CacheItem } from '../../../common/models/index'
import { DateCalculationHelper } from '../../../common/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics-all',
  templateUrl: './all.html',
  styleUrls: ['./all.scss']
})

export class AllComponent implements OnInit{

  public list: Array<string> = CATEGORIES
  public title: string
  public category: string
  public from: Date
  public  to: Date
  private activeCategory: string
  private key: string = 'categories'
  public spends: any
  public loading = false

  constructor (private budgetService: BudgetService, 
      private translationService: TranslationService, 
      private cacheService: StatisticsCacheService,
      private router: Router,
      private activated: ActivatedRoute){
    const translations = translationService.getAllForComponent(this.key)
    
    this.title = translations.title
    this.currentMonthSpendsSetup()
  }

  ngOnInit() {
    let fromString = this.activated.snapshot.paramMap.get('from')
    let toString = this.activated.snapshot.paramMap.get('to')

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

  getStatistics(category: string) {
    this.activeCategory = category
    this.router.navigate([`/statistics/${category}`])
  }

  dateUpdated($event) {
        this[$event.type] = $event.value
        this.getAllSpendsPerPeriod()
  }

  getAllSpendsPerPeriod() : BuyingItem[] {
    const spendsHandler = res => {
          let dateRanges = DateCalculationHelper.separateToMonthlyRanges(this.from, this.to)
          let groupped = this._groupByCategories(res)
          this.loading = false
          return this._updateCategorizedDataPerDateRange(groupped, dateRanges)
         
    }
    if (!this.from || !this.to || this.to.getTime() < this.from.getTime()) return []
    let dateRanges = DateCalculationHelper.separateToMonthlyRanges(this.from, this.to, false)
    const result = []
    this.loading = true
    
    Promise.all([...dateRanges.map(range => 
          this.cacheService.getCache(range.from, range.to))])
          .then(results => {
              if (!results.length || results.every(x => !x.length)) {
                this.budgetService.getAllSpends(this.from, this.to).subscribe(res => {
                    res.query.on('value', result => {
                        const arr = DateCalculationHelper.transformObjectToArray(result.val())
                        this.spends = spendsHandler(arr)
                        this.cacheService.addOrUpdateCacheForRanges(this.spends, this.from, this.to, res.id)
                    })
                })
              } else {
                this.spends = spendsHandler([].concat(...results))
              }
          })
  }

  _groupByCategories(value) {
    return value ? value
      .map(x => {
            x.dateString =  new Date(x.date).toLocaleDateString()
            return x
      })
      .reduce((prev, current) => {
          if (!prev[current.group])
            prev[current.group] = {}
          
          let array = prev[current.group].array ? prev[current.group].array : [],
                totals = prev[current.group].totals ? prev[current.group].totals : 0
          
          
          totals += parseFloat(current.price)
          prev[current.group].array = [...array, current]
          prev[current.group].totals = totals
          return prev
      }, {})
    : []       
  }

  _updateCategorizedDataPerDateRange(categorized, dateRanges) {
    for(let group in categorized) {
      categorized[group].items = 
        this._separateArrayPerRange(categorized[group].array, dateRanges)
    }
    return categorized
  }

  _separateArrayPerRange(array, dateRanges) {
    const arrayInRangeCaller = (array, from: Date, to: Date) => {
      return array.filter(item => item.date >= from && item.date <= to)
    } 
    return dateRanges.map(range => {
      const rangedArray = arrayInRangeCaller(array, range.from, range.to)
      
      range.totals = rangedArray.reduce((prev, item) => {
        prev += parseFloat(item.price)        
        return prev
      },0)
      range.fromString = range.from.toLocaleDateString()
      range.toString = range.to.toLocaleDateString()
      range.array = rangedArray
      return {...range}
    })
  }

  details(category, fromString, toString) {
    this.router.navigate([`/statistics/${category.value}/history`, 
        { from:fromString, to: toString}])
  }
}

