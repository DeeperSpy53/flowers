const Pool = require('pg').Pool;

const db = new Pool({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: '5432',
    database: 'flowers'
})

module.exports = db;