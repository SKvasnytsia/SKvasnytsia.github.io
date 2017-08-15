import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AuthService } from './auth.service'
//models
import { BuyingItem } from '../common/models/index'

//translators
import {TRANSLATE} from '../translators/translate.en'

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

@Injectable()
export class BudgetService {
        private spends: BuyingItem[] = []

    constructor(private af: AngularFireDatabase, private authService:AuthService) {      
    }

    getAllSpends(dateFrom: Date, dateTo: Date){
        return this.authService.uid.map(id => {
            let ref =  this.af.app.database().ref(`/users/${id}/spends`)
            let query = ref.orderByChild('date').startAt(dateFrom.getTime()).endAt(dateTo.getTime())
            
            return {id, query}
        })
    }

    addItem(item: BuyingItem) {
        const id : string = uuidv4()
        
        item.id = id
        return this.authService.uid.map(id => {
            let ref =  this.af.app.database().ref(`/users/${id}/spends`)

            ref.push(item)
            return {id, item}
        })
    }

    updateItem(item: BuyingItem) : any {
        this.authService.uid.subscribe(id => {
             let ref =  this.af.app.database().ref(`/users/${id}/spends`)
            
            ref.update(item).then(res => {
                console.log('updateItem', res)
            })
        })
    }

    deleteItem(itemName: string) : any {
        this.authService.uid.map(id => {
             let ref =  this.af.app.database().ref(`/users/${id}/spends`)
            
            ref.child(itemName).remove().then(res => {
                console.log('deleteItem', res)
            })

        })
    }
}