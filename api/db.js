const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Hasty_Starter',
  password: 'admin',
  port: 5432
});

module.exports = pool;