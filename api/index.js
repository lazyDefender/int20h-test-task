require('dotenv').config()
const express = require('express')

const app = express()
// Import routes
const buckwheat = require('./routes/buckwheat')

// Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, jwt')
    if(req.method === 'OPTIONS') {
        return res.sendStatus(200)
    }
    next()
})
app.use(express.json())
app.use('/api/buckwheat', buckwheat)

// Listen
app.listen(process.env.PORT || 3020)