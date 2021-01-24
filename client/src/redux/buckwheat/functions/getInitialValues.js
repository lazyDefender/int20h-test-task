export const getInitialValues = (items) => {
    const prices = items.map(item => item.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    const weights = [...new Set(items.map(item => item.weight))].sort((a, b) => a - b)

    return {
        minPrice: Math.floor(minPrice),
        maxPrice: Math.ceil(maxPrice),
        weights,
        priceOrder: 'asc',
    }
}