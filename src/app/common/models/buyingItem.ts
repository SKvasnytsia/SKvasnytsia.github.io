export class BuyingItem {
    public id: string
    public picture: string
    public dateString: string
    
    constructor(public price: string,
                public date?: Date ) {

        this.price = price
        this.date = date
        if (this.date) {
            this.dateString = this.date.toDateString()
        }

    }
}