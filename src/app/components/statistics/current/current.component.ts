import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import {CATEGORIES} from '../../models/categories'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'current',
  templateUrl: './current.html',
  styleUrls: ['./current.scss']
})

export class CurrentComponent {
    title: string
    constructor(private route: ActivatedRoute) {
        const category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        
        this.title = category.value
    }
}