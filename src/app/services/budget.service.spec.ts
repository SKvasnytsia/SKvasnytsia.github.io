import { BudgetService } from './index'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { BuyingItem } from '../common/models/index'

describe('BudgetService', () => {
    let budgetService: BudgetService,
        mockFireBase

    beforeEach(() => {
        mockFireBase = jasmine.createSpyObj('mockFireBase', ['app.database'])
        budgetService = new BudgetService(mockFireBase)
    })

    //todo: chain functions <= how to test
    describe('getAllSpends', () => {
        it('should get all the spends per group', () => {
            const groupName = 'fakeGroup'
            mockFireBase.app = {
                database: function () { 
                    return {
                        ref: function() {
                            return {
                                orderByChild: function() {
                                    return {
                                        startAt: function() {
                                            return {
                                                endAt : function() {}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            const result = budgetService.getAllSpends(groupName, new Date(), new Date())

            expect(result).toBe(void 0)
        })
    })
})