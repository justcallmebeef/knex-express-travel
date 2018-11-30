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

app.get('/:id', (req, res) => {
    id = req.params.id
    queries.getById(id).then(locations => {
        res.send(locations)
    })
})

app.post('/', (req, res) => {
    body = req.body 
    queries.createLocation(body).then(locations => res.send(locations[0]))
})

app.delete('/:id', (req, res) => {
    id = req.params.id 
    queries.deleteLocation(id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    let id = req.params.id
    let body = req.body 
    queries.updateLocation(id, body).then(response => res.json(response[0]))
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'data not found' }})
  })
 
 app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
  })

app.listen(port)