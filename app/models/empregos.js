module.exports = {

    getVagas: function (connection, callback) {
        let sql = 'select * from vagas';
        connection.query(sql, callback);
    }
    
}