export class DateCalculationHelper {
    public static getStartAndEndDatesPerMonth(date: Date) {
        const year = date.getFullYear(),
            month = date.getMonth()

        return { 
            from : new Date(year, month, 1), 
            to: new Date(year, month + 1, 0) 
        }
    }
    //TODO: from should be less than to
    public static separateToMonthlyRanges(from: Date, to: Date, isOriginRange: boolean = true) {
        const _getRange = (start, finish, currentYear): any[] => {
        const array: any[] = []

        for (let i = start; i <= finish; i++) {
            let {from: f, to: t} = 
            this.getStartAndEndDatesPerMonth(new Date(fromYear, i))
            if (isOriginRange) {
            if (i === start && currentYear === fromYear) f = from
            if (i === finish && currentYear === toYear) t = to
            }
            array.push({from: f, to: t})
        }
        return array
        }

        let objRange = []
        let fromMonth = from.getMonth()
        let fromYear = from.getFullYear()
        let toMonth = to.getMonth()
        let toYear = to.getFullYear()

        if (fromMonth === toMonth && fromYear === toYear) 
        return [{ from, to }]
        
        if (fromYear === toYear && fromMonth < toMonth){
        return _getRange(fromMonth, toMonth, fromYear)
        }

        if (fromYear < toYear) {
        for (let j = fromYear; j <= toYear; j++) {
            let i = fromMonth
            let monthlyEnd = 12
            if (j > fromYear) i = 1
            if (j === toYear) monthlyEnd = toMonth
            objRange = objRange.concat(_getRange(i, monthlyEnd, j))
        }
        return objRange
        }
        
    }
}