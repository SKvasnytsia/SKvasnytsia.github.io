import { Component, ViewEncapsulation, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import {CATEGORIES} from '../models/categories'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics',
  templateUrl: './statistics.html',
  styleUrls: ['./statistics.scss']
})

export class StatisticsComponent {
  @Input() spends:any
  public title: string

  constructor(private budgetService: BudgetService, private translationService: TranslationService, private router: Router){
    this.title = 'Title'
  }

  getHistory() {

  }
}