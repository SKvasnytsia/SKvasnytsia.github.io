import BuyingItem from '../models/buyingItem'

const item = new BuyingItem("Fruits","30$",new Date())

export default class BudgetServiceMock {
        getAll(): Promise<BuyingItem[]> {
            return Promise.resolve([item])
        }

        get(): Promise<BuyingItem> {
            return Promise.resolve(item)
        }

        save(item: BuyingItem) : Promise<BuyingItem>{
            return Promise.resolve(item)
        }

        update(item: BuyingItem) : Promise<BuyingItem>{
            return Promise.resolve(item)
        }

        delete(item: BuyingItem) : Promise<BuyingItem> {
            return Promise.resolve(item)
        }
}