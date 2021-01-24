import { store } from '../../../../../init/store'
import { buckwheatActions } from '../../../../../redux/buckwheat/actions'
export default (filters) => {
    store.dispatch(buckwheatActions.setFilters(filters))
    const { items } = store.getState().buckwheat
    
    
    const filteredItems = items.filter(item => {
        const {
            price,
            weight
        } = item
        const weightsAsNumbers = filters.weights.map(w => parseInt(w))
        const minPriceCondition = price >= filters.minPrice
        const maxPriceCondition = price <= filters.maxPrice
        const weightsCondition = weightsAsNumbers.length > 0 ? weightsAsNumbers.includes(weight) : true
        
        return minPriceCondition
         && maxPriceCondition 
        && weightsCondition
        
    })
    store.dispatch(buckwheatActions.setFilteredItems(filteredItems))
}