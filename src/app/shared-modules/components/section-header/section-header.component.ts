import { Component, Input } from '@angular/core'

@Component({
    selector: 'section-header',
    templateUrl: './section-header.html',
    styleUrls: ['./section-header.scss']
})

export class SectionHeaderComponent {
    @Input() title: string
}
