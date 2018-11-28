const express = require('express')
const app = express()
const queries = require('./queries')
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    queries.listAll().then(locations => {
        res.send(locations)
    })
})

app.listen(port)