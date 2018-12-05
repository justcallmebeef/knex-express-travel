exports.up = function(knex, Promise) {
    return knex.schema.createTable('countries', (country) => {
        country.increments('id')
        country.string('name')
        country.string('code')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('countries')
};