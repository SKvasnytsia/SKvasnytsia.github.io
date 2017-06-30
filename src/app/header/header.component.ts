import { Input, Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class HeaderComponent {
  @Input() title:string
}
