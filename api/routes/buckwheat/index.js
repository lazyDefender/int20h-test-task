const express = require('express')

const router = express.Router()

const buckwheatRepository = require('../../repositories/buckwheat')

router.get('/', async (req, res) => {
    buckwheatRepository.getFromMetro()
})

module.exports = router