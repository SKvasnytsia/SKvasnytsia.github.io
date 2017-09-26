import { Component, ViewEncapsulation, Inject, Input, Output, EventEmitter} from '@angular/core'
import { FILE_READER_TOKEN } from '../../services/index'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'take-picture',
    templateUrl: './takePicture.html',
    styleUrls: ['./takePicture.scss']
})

export class TakePictureComponent {
    @Input() picture
    @Output() fileUpload = new EventEmitter()

    constructor(@Inject(FILE_READER_TOKEN) private FileReader: any){
    }

    onFileUpload($event) {
        if ($event.target.files && $event.target.files[0]) {
            const reader = this.FileReader,
                readerInstance = new reader()
            
            readerInstance.onload = (event) => {
                this.picture = event.target.result;
                this.fileUpload.emit(event.target.result)
            }
            readerInstance.readAsDataURL($event.target.files[0]);
            
        }
    }
}