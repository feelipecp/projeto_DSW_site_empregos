let mysql = require('mysql2');

module.exports = function (){

    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'felipe',
        database: 'empregos'
    });
}


