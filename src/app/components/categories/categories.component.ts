import { Component, ViewEncapsulation, EventEmitter, Input, Output, Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { 
    TranslationService
 } from "app/services/index"

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
 
  constructor (private translationService: TranslationService, private router: Router){
    this.title = translationService.get(this.key)
  }

  getStatistics(category: string) {
    this.activeCategory = category
    this.router.navigate([`/statistics/${category}`])
  }
}
