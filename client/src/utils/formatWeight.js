// weight is always in grams

import { isNumberFloat } from "./isNumberFloat"

// 1 000 grams -> 1 kg
export const formatWeight = (weight) => {
    let result = `${weight} г`

    if(weight >= 1000) {
        const kilograms = weight / 1000
        const withPrecision = isNumberFloat(kilograms) ? kilograms.toPrecision(1) : kilograms 
        result = `${withPrecision} кг`
    }

    return result
}