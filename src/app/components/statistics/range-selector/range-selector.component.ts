import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MdDatepicker } from '@angular/material'

@Component({
    selector: 'range-selector',
    templateUrl: './range-selector.html',
    styleUrls: ['./range-selector.scss']
})

export class RangeSelectorComponent implements OnInit {
    @ViewChild('fromDate') fromDate: MdDatepicker<Date>
    @ViewChild('toDate') toDate: MdDatepicker<Date>
    @Input() from: Date
    @Input() to: Date
    @Output() dateUpdated = new EventEmitter()
    public showError:boolean = false

    ngOnInit() {
        this.toDate.selectedChanged.subscribe(date => {
            this.showError = this.from.getTime() - date.getTime() > 0            
            this.dateUpdated.emit({ type: 'to', value: date})
        })
        this.fromDate.selectedChanged.subscribe(date => {
            this.showError = date.getTime() - this.to.getTime() > 0                        
            this.dateUpdated.emit({ type: 'from', value: date})
        })
        this.showError = this.from.getTime() - this.to.getTime() > 0
    }
}