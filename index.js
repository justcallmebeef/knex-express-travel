const express = require('express')
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    queries.listAll().then(locations => {
        res.send(locations)
    })
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'data not found' }})
  })
 
 app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
  })

app.listen(port)