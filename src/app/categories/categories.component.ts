import { Component, ViewEncapsulation, EventEmitter, Input, Output, Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {ScannerComponent} from '../scanner/scanner.component';

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import {CATEGORIES} from '../models/categories'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss']
})

@Injectable()
export class CategoryComponent {

  public list: Array<string> = CATEGORIES
  public title: string
  public category: string
  private activeCategory: string
 
  constructor (private budgetService: BudgetService, private translationService: TranslationService, private router: Router){
    this.title = translationService.get('categories')
  }

  setActiveCategory($event) {
    this.category = $event.category
  }

  getStatistics(category: string) {
    this.activeCategory = category
    this.router.navigate([`/statistics/${category}`])
  }

    //todo: add sorting by groups, time....
  getAllSpends(): any {
    if (this.category === null) return []
    let result = this.budgetService.getAllSpends(this.category)

    console.log('dataList', result)
    return result
  }
}
