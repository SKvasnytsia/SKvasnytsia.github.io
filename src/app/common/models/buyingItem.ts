export class BuyingItem {
    public id: string
    public picture: string

    constructor(public price: string,
                public date?: Date ) {

        this.price = price
        this.date = date

    }
}