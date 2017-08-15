import { BudgetService, AuthService } from './index'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import { BuyingItem } from '../common/models/index'

describe('BudgetService', () => {
    let budgetService: BudgetService,
        mockFireBase,
        mockAuthService: AuthService

    beforeEach(() => {
        mockFireBase = jasmine.createSpyObj('mockFireBase', ['app.database'])
        budgetService = new BudgetService(mockFireBase, mockAuthService)
    })

    //todo: chain functions <= how to test
    describe('getAllSpends', () => {
        it('should get all the spends per group', () => {
            mockAuthService.uid = Observable.of("")
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
            const result = budgetService.getAllSpends(new Date(), new Date())

            expect(result).toBe(Observable.of({}))
        })
    })

    // describe('addItem',  ()=> {
    //     it('should add item to specified group', () => {
    //         mockAuthService.uid = Observable.of("")
            
    //         const result = budgetService.addItem(new BuyingItem('5'))

    //     })
    // })
})