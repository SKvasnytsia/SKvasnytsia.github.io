import { Component, ViewEncapsulation, Injectable } from '@angular/core'
import { TranslationService } from "app/services/index"

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {

  public title: string
 
  constructor (private translationService: TranslationService){
    this.title = translationService.get('title')
  }

}
