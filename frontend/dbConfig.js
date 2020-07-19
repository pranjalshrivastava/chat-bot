const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'cloudsql-proxy',
    database: 'chatbot_db',
    password: process.env.DB_PWD,
    port: 5432,
});

module.exports = { pool };