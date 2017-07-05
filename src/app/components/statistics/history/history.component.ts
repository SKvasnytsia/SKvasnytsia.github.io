import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { MdDatepicker } from '@angular/material'

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'history',
  templateUrl: './history.html',
  styleUrls: ['./history.scss']
})

export class HistoryComponent implements OnInit{
    from: Date = new Date()
    to: Date = new Date()
    title: string
    category: any
    spends: any = []

    @ViewChild('fromDate') fromDate: MdDatepicker<Date>
    @ViewChild('toDate') toDate: MdDatepicker<Date>

    constructor(private budgetService: BudgetService, private _location: Location, private route: ActivatedRoute) {
        this.category = CATEGORIES.find(category => category.value.toLowerCase() === route.snapshot.params['category'].toLowerCase())
        
        this.title = this.category.value
    }

    ngOnInit() {
        this.toDate.selectedChanged.subscribe(date => {
            this.to = date
            this.getAllSpendsPerPeriod()
        })
        this.fromDate.selectedChanged.subscribe(date => {
            this.from = date
            this.getAllSpendsPerPeriod()
        })
    }
    //disable dates bigger or lower than  ---- smth like validate range
    getAllSpendsPerPeriod() : BuyingItem[] {
        console.log('getAllSpendsPerPeriod', this.from, this.to, this.category)
        if (this.category === null) return []
        if (!this.from || !this.to) return []

        console.log('getAllSpendsPerPeriod')
        this.budgetService.getAllSpends(this.category.value, this.from, this.to).on('value', result => {
             this.spends = this._getValidSpendsArray(result.val())
        })
    }

    backClicked() {
        this._location.back();
    }

    private _getValidSpendsArray(value) {
        return value ? value
            .filter(x => x && x.group.toLowerCase() === this.category.value.toLowerCase())
            .map(x => {
                x.dateString =  new Date(x.date).toLocaleDateString()
                return x
            }) : []       
    }
}