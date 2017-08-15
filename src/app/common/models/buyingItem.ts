export class BuyingItem {
    public id: string
    public picture: any
    public dateString: string
    public group: string
    
    constructor(public price: string,
                public date?: number ) {

        this.price = price
        this.date = date
        if (this.date) {
            this.dateString = new Date(this.date).toDateString()
        }

    }
    
}