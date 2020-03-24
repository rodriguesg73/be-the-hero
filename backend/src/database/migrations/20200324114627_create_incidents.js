
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    // auto increment fiel
    table.increments();
   
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
   
    // relation field between tables
    table.string('ong_id').notNullable(); 

    // determine wich collumn is a foreign key and from wich table.
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('inicidents');
};
