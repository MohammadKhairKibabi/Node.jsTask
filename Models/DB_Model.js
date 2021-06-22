/** Data Base Model
 * This file to configure data base connections
 * **/

/** MySQL DB **/
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: '3306',
    host: 'localhost',
    user: 'test_user',
    password: 'XacUizlGMZck57pR',
    database: 'test'
});

connection.connect();

//module exports :
module.exports = {
    connection: connection
};
