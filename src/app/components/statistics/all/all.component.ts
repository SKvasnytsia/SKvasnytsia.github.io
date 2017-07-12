import { Component, ViewEncapsulation, EventEmitter, Input, Output, Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "../../../services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics-all',
  templateUrl: './all.html',
  styleUrls: ['./all.scss']
})

export class AllComponent {

  public list: Array<string> = CATEGORIES
  public title: string
  public category: string
  public from: Date
  public to: Date
  private activeCategory: string
  private key: string = 'categories'
 
  constructor (private budgetService: BudgetService, private translationService: TranslationService, private router: Router){
    const translations = translationService.getAllForComponent(this.key)
    
    this.title = translations.title
  }

  getStatistics(category: string) {
    this.activeCategory = category
    this.router.navigate([`/statistics/${category}`])
  }

  dateUpdated($event) {
        console.log($event)
        this[$event.type] = $event.value
        this.getAllSpendsPerPeriod()
  }

  getAllSpendsPerPeriod() : BuyingItem[] {
        console.log('getAllSpendsPerPeriod', this.from, this.to, this.category)
        if (this.category === null) return []
        if (!this.from || !this.to) return []

        //console.log('getAllSpendsPerPeriod')
        // this.budgetService.getAllSpends(this.category.value, this.from, this.to).on('value', result => {
        //      this.spends = this._getValidSpendsArray(result.val())
        // })
  }
}
