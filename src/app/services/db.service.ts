import { Injectable } from '@angular/core'

import { CacheItem } from '../common/models/index'

function getWindow (): any {
    return window;
}

@Injectable()
export class DbService {
    private dbName: string = 'budgetDb'
    private dbVersion: number = 1
    private db: IDBDatabase
    private dbInitializedPromise: Promise<any>

    constructor() {
        this.dbInitializedPromise = this._initializeDBPromise()        
    }

    private _initializeDBPromise() {
        const windowRef = getWindow()
        const indexedDB = windowRef.indexedDB
        return new Promise((resolve, reject ) => {
            const request = indexedDB.open(this.dbName, this.dbVersion)
    
            request.onerror = err => {
                this.errorHandler(err)  
                reject(err)
            }        
            request.onsuccess = event => {
                this.dbInitializationHandler(event)
                resolve(event)
            }
            request.onupgradeneeded = (event) => {
                this._createObjectStore(event.target.result, 'statistics', new CacheItem('','','',new Date().getTime(),'','',''))
            }
        })    
    }

    private errorHandler(event) {
        console.error("DB", event)
    }

    private dbInitializationHandler(event) {
        this.db = event.target.result
    }

    private _createObjectStore(db, tableName: string, item: any){
        let objectStore = db.createObjectStore(tableName, { autoIncrement:true })

        for(var name in item) {
            let unique = name === 'id'

            objectStore.createIndex(name, name, { unique });
        }
        return objectStore
    }

    public getObjectStore(tableName: string): Promise<IDBObjectStore> { 
        return this.dbInitializedPromise.then(event => this.db.transaction(tableName, 'readwrite').objectStore(tableName))
    }
}
