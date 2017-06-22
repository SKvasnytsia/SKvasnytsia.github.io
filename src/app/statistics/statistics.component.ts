import { Component, ViewEncapsulation, Injectable, Input } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'statistics',
  templateUrl: './statistics.html',
  styleUrls: ['./statistics.scss']
})

@Injectable()
export class StatisticsComponent {
  @Input() spends:any

}