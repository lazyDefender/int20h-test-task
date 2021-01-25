import { isNumberFloat } from "./isNumberFloat"

// 19.9 грн -> 19 грн 90 коп
export const formatPrice = (price) => {
    let result = `${price} грн`
    const isFloat = isNumberFloat(price)
    if(isFloat) {
        const hrn = Math.floor(price)
        const decimalPart = (price - Math.floor(price)) * 100 
        const roundedDecimalPart = Math.round(decimalPart)
        result = `${hrn} грн ${roundedDecimalPart} коп`
    }

    return result
}