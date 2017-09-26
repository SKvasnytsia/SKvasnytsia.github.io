import { DateCalculationHelper } from './index'
describe('DateCalculationHelper', () => {
    describe('getStartAndEndDatesPerMonth', () => {
        it ('should return correct start and end dates', () => {
            let date = new Date('2017-12-31')
            let {from: startDate, to: endDate} = DateCalculationHelper.getStartAndEndDatesPerMonth(date)
            const expectedResult = new Date('2017-12-01').toLocaleDateString() 
            
            expect(startDate.toLocaleDateString()).toBe(expectedResult)
            expect(endDate.toLocaleDateString()).toBe(date.toLocaleDateString())
        })
    })
})