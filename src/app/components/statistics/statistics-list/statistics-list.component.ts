import { Component, ViewEncapsulation, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router'

import { 
    BudgetService,
    TranslationService
 } from "app/services/index"

import {CATEGORIES} from '../../models/categories'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics-list',
  templateUrl: './statistics-list.html',
  styleUrls: ['./statistics-list.scss']
})

export class StatisticsListComponent {
    constructor(){

    }


}