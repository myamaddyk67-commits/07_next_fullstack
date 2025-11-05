const mysql = require('mysql2');
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'u6708204',
    password: '6708204',
    database: 'u6708204_dit205',
});