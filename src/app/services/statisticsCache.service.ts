import { Injectable } from '@angular/core'
import { DbService, AuthService } from './index'
import { BuyingItem, CacheItem } from '../common/models/index'

@Injectable()
export class StatisticsCacheService {
    private objStore: IDBObjectStore
    private tableName: string = 'statistics'
    private userId: string
        
    constructor(private dbService: DbService) {
    }
    public addOrUpdateCacheForRanges(dataGroupedByRange:any, originalFrom, originalTo, id) {
        for (let group in dataGroupedByRange) {
            dataGroupedByRange[group].items.forEach(x => {
                this.addOrUpdateCache(x.array, x.from, x.to, group, id)
            })
        }
    }
    public addOrUpdateCache(data: any, from: Date, to: Date, group: string, id: string) {
        const items = this._mapToCacheItem(data, from, to, group, id)
        this.dbService.getObjectStore(this.tableName).then(store => {
            this.objStore = store
            items.forEach(item => {
                this.objStore.put(item)
            })
        })
       
    }
    public getCache(from: Date, to: Date): Promise<any> {
        let results = []
        const cacheRequestPromiseCaller = (store) => {
            return new Promise((resolve, reject) => {
                let dataRequest: IDBRequest = store
                .index('range')
                .openCursor(`${from.toLocaleDateString('en-US')}-${to.toLocaleDateString('en-US')}`)
                
                dataRequest.onsuccess = (e: any) => {
                    let cursor = e.target.result
                    if (cursor) {
                        results.push(cursor.value) 
                        cursor.continue()
                    } else {
                        resolve(results)
                    }

                }
                dataRequest.onerror = reject
            })
        }
        return this.dbService.getObjectStore(this.tableName)
        .then(store => {
            return cacheRequestPromiseCaller(store)
        })
    }

    private _mapToCacheItem(items: BuyingItem[], from: Date, to: Date, group: string, id: string): CacheItem[] {
        return items.map(item => 
            new CacheItem(
                item.id, 
                item.picture, 
                item.price, 
                item.date, 
                id, 
                group, 
                `${from.toLocaleDateString('en-US')}-${to.toLocaleDateString('en-Us')}`))
    }
    private _mapFromCacheItem(items: CacheItem[]): BuyingItem[] {
        let data =  items.map(item => {
            let buyingItem = new BuyingItem(item.price, item.date)
            buyingItem.id = item.id
            buyingItem.group = item.group
            buyingItem.picture = item.picture
            return buyingItem
        })
        return data
    }
}