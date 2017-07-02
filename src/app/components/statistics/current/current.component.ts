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

    constructor(private route: ActivatedRoute){

    }
}