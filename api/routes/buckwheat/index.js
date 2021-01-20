const express = require('express')

const router = express.Router()

const buckwheatRepository = require('../../repositories/buckwheat')

router.get('/', async (req, res) => {
    const {
        minPrice,
        maxPrice,
        weights,
        priceOrder,
    } = req.query

    const rozetkaItems = await buckwheatRepository.getFromRozetka()
    const metroItems = await buckwheatRepository.getFromMetro()
    const novusItems = await buckwheatRepository.getFromNovus()
    const epicentrItems = await buckwheatRepository.getFromEpicentr()

    let allItems = [
        ...rozetkaItems,
        ...metroItems,
        ...novusItems,
        ...epicentrItems,
    ]

    // filter by price
    if(minPrice && maxPrice) {
        const min = parseFloat(minPrice)
        const max = parseFloat(maxPrice)
        allItems = allItems.filter(i => i.price >= min && i.price <= max)
    }

    // filter by weight 
    if(weights) {
        const weightsList = weights.split(',').map(w => parseInt(w))
        allItems = allItems.filter(i => weightsList.includes(i.weight))
    }
    switch(priceOrder) {
        case 'asc':
            allItems = allItems.sort((a, b) => a.price - b.price)
            break
        case 'desc':
            allItems = allItems.sort((a, b) => b.price - a.price)
            break
        default:
            allItems = allItems.sort((a, b) => a.price - b.price)
            break
    }
    res.json(allItems)
})

module.exports = router