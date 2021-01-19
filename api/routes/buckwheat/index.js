const express = require('express')

const router = express.Router()

const buckwheatRepository = require('../../repositories/buckwheat')

router.get('/', async (req, res) => {
    const rozetkaItems = await buckwheatRepository.getFromRozetka()
    const metroItems = await buckwheatRepository.getFromMetro()
    const novusItems = await buckwheatRepository.getFromNovus()
    const epicentrItems = await buckwheatRepository.getFromEpicentr()
    const allItems = [
        ...rozetkaItems,
        ...metroItems,
        ...novusItems,
        ...epicentrItems,
    ]
    res.json(allItems)
})

module.exports = router