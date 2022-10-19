module.exports = {
    client: 'pg',
    connection: {
      database: 'blog',
      user:     'postgres',
      password: 'saneto@044'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
