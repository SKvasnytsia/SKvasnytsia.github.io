import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
//models
import { BuyingItem } from '../common/models/index'

//translators
import {TRANSLATE} from '../translators/translate.en'

//constants
const item = new BuyingItem("30",new Date())

@Injectable()
export class BudgetService {
        private spends: BuyingItem[] = []
        private uid

    constructor(public af: AngularFireDatabase) {
        // auth.authState.subscribe(user => {
        //     this.uid = user ? user.uid : null
        // })
    }

    //TODO: get spends per user that is authorized


    getAllSpends(dateFrom: Date, dateTo: Date){
        let ref =  this.af.app.database().ref(`/users/yKxxSL7CRVVPr3TwmKj0eeikIiO2/spends`)
        let query = ref.orderByChild('date').startAt(dateFrom.getTime()).endAt(dateTo.getTime())
    
        return query
    }

    addItem(item: BuyingItem): any {
        const id : string = '123' //autogenerate guid
        
        item.id = id
        //return this.spends.push(item)
    }

    updateItem(item: BuyingItem) : any {
        //return this.spends.update(item.id, item)
    }

    deleteItem(item: BuyingItem) : any {
        //return this.spends.remove(item.id)
    }
}