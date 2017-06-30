import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
//models
import BuyingItem from '../components/models/buyingItem'

//translators
import {TRANSLATE} from '../translators/translate.en'

//constants
const item = new BuyingItem("Fruits","30$",new Date())

@Injectable()
export class BudgetService {
        spends: FirebaseListObservable<BuyingItem[]>
        constructor(public af: AngularFireDatabase) {
        }
        getAllSpends(group: string): FirebaseListObservable<BuyingItem[]>{
            this.spends =  this.af.list('/spends', { query: { orderByChild: 'group', equalTo: group } })       
            return this.spends
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