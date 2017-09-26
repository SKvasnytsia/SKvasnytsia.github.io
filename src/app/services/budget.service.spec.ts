import { BudgetService, AuthService } from './index'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import { BuyingItem } from '../common/models/index'

describe('BudgetService', () => {
    let budgetService: BudgetService,
        mockFireBase,
        mockAuthFireBase,
        app,
        mockAuthService: AuthService

    beforeEach(() => {
        //afAuth.authState.subscribe
        mockAuthFireBase = jasmine.createSpy('mockAuthFireBase')
        mockAuthFireBase.authState = jasmine.createSpyObj('mockAuthFireBase.authState',['subscribe'])
        mockFireBase = jasmine.createSpy('mockFireBase')
        app = jasmine.createSpyObj('app', ['database', 'ref', 'orderByChild', 'startAt', 'endAt'])
        mockAuthService = new AuthService(mockAuthFireBase)
        budgetService = new BudgetService(mockFireBase, mockAuthService)
    })

    //todo: chain functions <= how to test
    describe('getAllSpends', () => {
        it('should get all the spends per group', () => {
            mockAuthService.uid = Observable.of('')
            app.database.and.returnValue(app)
            app.ref.and.returnValue(app)
            app.orderByChild.and.returnValue(app)
            app.startAt.and.returnValue(app)
            app.endAt.and.returnValue(app)
            mockFireBase.app = app
                
            budgetService.getAllSpends(new Date(), new Date()).subscribe(obj  =>{
                expect(obj.id).toBe('')
            })

        })
    })

    // describe('addItem',  ()=> {
    //     it('should add item to specified group', () => {
    //         mockAuthService.uid = Observable.of("")
            
    //         const result = budgetService.addItem(new BuyingItem('5'))

    //     })
    // })
})