import { Component, ViewEncapsulation, Injectable } from '@angular/core';


import { TranslationService } from '../../services/index'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'take-picture',
    templateUrl: './takePicture.html',
    styleUrls: ['./takePicture.scss']
})

export class TakePictureComponent {

    constructor(private translateService: TranslationService) {
        //this.title = translateService.get('addGoods')
    }

}
