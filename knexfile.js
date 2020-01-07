require('dotenv').config();

const pg = require("pg")
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'sqlite3',
    //This was updated with DB for Heroku
    connection: process.env.DB_URL,
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
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};