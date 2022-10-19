exports.up = function(knex) {
  return knex.schema.createTable('users',(table) => {
    table.increments('id').primary();
    table.string('username', 150).notNullable();
    table.string('email',150).notNullable();
    table.string ('password',150).notNullable();
    table.string('img');
    table.timetamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
