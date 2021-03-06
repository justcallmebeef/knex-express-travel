exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', (location) => {
        location.increments('id')
        location.string('city')
        location.string('country')
        location.string('image')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('locations')
};