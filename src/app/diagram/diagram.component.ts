import { Component, ViewEncapsulation, Injectable } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'diagram',
  templateUrl: './diagram.html',
  styleUrls: ['./diagram.scss']
})

@Injectable()
export class DiagramComponent {
  constructor (){

  }
}
