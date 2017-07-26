export class CacheItem {
    constructor (
        public id: string, 
        public picture: string,
        public price: string,
        public date: Date,
        public userId: string,
        public group: string,
        public range: string) {

    }
}