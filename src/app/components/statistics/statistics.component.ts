import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import { 
    DbService
 } from "../../services/index"
 import { CacheItem } from '../../common/models/index'


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics',
  templateUrl: './statistics.html',
  styleUrls: ['./statistics.scss']
})

export class StatisticsComponent {
}