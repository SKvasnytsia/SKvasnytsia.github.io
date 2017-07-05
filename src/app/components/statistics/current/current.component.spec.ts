import { BudgetService, TranslationService } from '../../../services/index'
import { ActivatedRoute } from '@angular/router'

import { CurrentComponent } from './current.component'

import { BuyingItem, CATEGORIES } from '../../../common/models/index'

describe('Statistics.CurrentComponent', () => {
    let component: CurrentComponent
    let mockBudgetService, mockTranslationService
    let mockActivatedRoute

    beforeEach(() => {
        mockActivatedRoute = {
            snapshot: {
                params: {
                    'category': 'Hobby'
                }
            }
        }
        mockTranslationService = jasmine.createSpyObj('mockTranslationService', ['getAllForComponent'])
        component = new CurrentComponent(mockBudgetService, mockActivatedRoute, mockTranslationService)
    })

    describe('_getStartAndEndDatesPerMonth', () => {
        it ('should return correct start and end dates', () => {
            let date = new Date('2017-12-31')
            let {from: startDate, to: endDate} = component._getStartAndEndDatesPerMonth(date)
            const expectedResult = new Date('2017-12-01').toLocaleDateString() 
            
            expect(startDate.toLocaleDateString()).toBe(expectedResult)
            expect(endDate.toLocaleDateString()).toBe(date.toLocaleDateString())
        })
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