import { BudgetService } from './index'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { BuyingItem } from '../common/models/index'

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
            const result = budgetService.getAllSpends(groupName, new Date(), new Date())

            expect(result).toBe(void 0)
        })
    })
})