import { BudgetService } from './index'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import BuyingItem from '../models/buyingItem'

describe('BudgetService', () => {
    let budgetService: BudgetService,
        mockFireBase

    beforeEach(() => {
        mockFireBase = jasmine.createSpyObj('mockFireBase', ['list'])
        budgetService = new BudgetService(mockFireBase)
    })

    describe('getAllSpends', () => {
        it('should get all the spends per group', () => {
            const groupName = 'fakeGroup'
            const result = budgetService.getAllSpends(groupName)

            expect(result).toBe(void 0)
        })
    })
})