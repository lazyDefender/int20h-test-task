const express = require('express')

const router = express.Router()

const buckwheatRepository = require('../../repositories/buckwheat')

router.get('/', async (req, res) => {
    const {
        minPrice,
        maxPrice,
        weights,
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
    res.json(allItems)
})

module.exports = router