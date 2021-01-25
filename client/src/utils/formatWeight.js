// weight is always in grams
// 1 000 grams -> 1 kg
export const formatWeight = (weight) => {
    let result = `${weight} г`

    if(weight >= 1000) {
        const kilograms = (weight / 1000).toPrecision(1) 
        result = `${kilograms} кг`
    }

    return result
}