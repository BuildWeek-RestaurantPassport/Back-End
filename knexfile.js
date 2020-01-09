require('dotenv').config();

const pg = require("pg")
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'sqlite3',
    //This was updated with DB for Heroku
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },


//This part is done w POSTGRES
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};