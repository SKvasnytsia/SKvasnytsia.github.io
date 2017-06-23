import { TranslationService } from './index'

import {TRANSLATE} from '../translators/translate.en'

describe('TranslationService', () => {
    let translationService: TranslationService

    beforeEach(() => {
        translationService = new TranslationService()
    })

    describe('get', () => {
        it('should get valid translation for found data', () => {
            let result = translationService.get('title')
            expect(result).toBe('My budget')
        })

        it('should get key instead of translation for invalid data', () => {
            const key = 'jdadk'
            let result = translationService.get(key)
            expect(result).toBe(key)
        })
    })

    describe('getAllForComponent', () => {
        it('should get object with found data', () => {
            let result = translationService.getAllForComponent('login')

            expect(result.toString()).toBe('[object Object]')
            expect(typeof result.title).toBe('string')
        })
    })
})