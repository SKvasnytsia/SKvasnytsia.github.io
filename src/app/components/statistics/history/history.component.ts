import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import {CATEGORIES} from '../../models/categories'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'history',
  templateUrl: './history.html',
  styleUrls: ['./history.scss']
})

export class HistoryComponent {
    fromDate = new Date()
    toDate = new Date()
    title: string

    constructor(private _location: Location, private route: ActivatedRoute) {
        const category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        
        this.title = category.value
    }
    backClicked() {
        this._location.back();
    }
}