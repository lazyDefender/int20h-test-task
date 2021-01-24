import { store } from '../../../../init/store'

export const getInitialValues = () => {
    const { items } = store.getState().buckwheat
    const prices = items.map(item => item.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    const weights = [...new Set(items.map(item => item.weight))]

    return {
        minPrice,
        maxPrice,
        weights,
    }
}

export const initialValues = {
    priceOrder: 'asc',
    // minPrice: 0,
    // maxPrice: 100000,
    // weights: [],
    ...getInitialValues(),
}