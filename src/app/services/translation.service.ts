import { Injectable } from '@angular/core';

//translators
import {TRANSLATE} from '../translators/translate.en'

@Injectable()
export class TranslationService {
    get(key: string) {
        return TRANSLATE[key] || key
    }

    getAllForComponent(key: string) {
        return TRANSLATE[key] || {}
    }

}