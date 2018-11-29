const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('locations')
    }, 
    getById(id) {
        return database('locations').where({id: id}).first()
    }, 
    createLocation(newLocation) {
        return database('locations').insert(newLocation).returning('*')
    }
}