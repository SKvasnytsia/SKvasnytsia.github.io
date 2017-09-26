import { BudgetService, TranslationService, StatisticsCacheService } from '../../../services/index'
import { ActivatedRoute } from '@angular/router'

import { CurrentComponent } from './current.component'

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

describe('Statistics.CurrentComponent', () => {
    let component: CurrentComponent
    let mockBudgetService, mockTranslationService, cacheService
    let mockActivatedRoute, defaultRouter


    beforeEach(() => {
        mockActivatedRoute = {
            snapshot: {
                params: {
                    'category': 'Hobby'
                }
            }
        }
        mockTranslationService = jasmine.createSpyObj('mockTranslationService', ['getAllForComponent'])
        component = new CurrentComponent(mockBudgetService, cacheService, mockActivatedRoute, defaultRouter, mockTranslationService)
    })

    describe('_getPreviousMonthDate', () => {
        it ('should return correct start of previous month for edge corners as the start of year', () => {
            let date = new Date('2017-01-01')
            let startDate = component._getPreviousMonthDate(date)
            const expectedResult = new Date('2016-12-01').toLocaleDateString() 
            
            expect(startDate.toLocaleDateString()).toBe(expectedResult)
        })
    })
})