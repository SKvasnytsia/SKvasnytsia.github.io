export default class BuyingItem {
    public id: string
    
    constructor(public description: string,
                public price: string,
                public date?: Date ) {

        this.description = description
        this.price = price
        this.date = date
    }
}