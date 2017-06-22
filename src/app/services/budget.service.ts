import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
//models
import BuyingItem from '../models/buyingItem'

//translators
import {TRANSLATE} from '../translators/translate.en'

//constants
const item = new BuyingItem("Fruits","30$",new Date())

@Injectable()
export class BudgetService {
        spends: FirebaseListObservable<BuyingItem[]>
        constructor(public af: AngularFire) {
        }
        getAllSpends(group: string): FirebaseListObservable<BuyingItem[]>{
            this.spends =  this.af.database.list('/spends', { query: { orderByChild: 'group', equalTo: group } })       
            return this.spends
        }

        addItem(item: BuyingItem): firebase.Promise<BuyingItem> {
            const id : string = '123' //autogenerate guid
            
            item.id = id
            return this.spends.push(item)
        }

        updateItem(item: BuyingItem) : firebase.Promise<void>{
            return this.spends.update(item.id, item)
        }

        deleteItem(item: BuyingItem) : firebase.Promise<void> {
            return this.spends.remove(item.id)
        }
}