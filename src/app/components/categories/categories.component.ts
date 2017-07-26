import { Component, ViewEncapsulation, EventEmitter, Input, Output, Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { 
    TranslationService
 } from "../../services/index"

import { CATEGORIES } from '../../common/models/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss']
})

export class CategoryComponent {

  public list: Array<string> = CATEGORIES
  public title: string
  public category: string
  private activeCategory: string
  private key: string = 'categories'
 
  constructor (private translationService: TranslationService, 
        private router: Router) {
    const translations = translationService.getAllForComponent(this.key)
    
    this.title = translations.title
  }

  getStatistics(category: string) {
    this.activeCategory = category
    this.router.navigate([`/statistics/${category}`])
  }
}
