const express = require('express')

const router = express.Router()

const buckwheatRepository = require('../../repositories/buckwheat')

router.get('/', async (req, res) => {
    buckwheatRepository.getFromEpicentr()
})

module.exports = router