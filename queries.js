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
    }, 
    deleteLocation(id) {
        return database('locations').where('id', id).delete()
    }, 
    updateLocation(id, location) {
        return database('locations').where('id', id).update(location).returning('*')
    }
}