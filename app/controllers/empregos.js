const dbConnection = require('../../config/db');
const { getVagas, setVagas } = require('../models/empregos');

module.exports.empregosListar = function (app, req, res) {
    let connection = dbConnection();

    getvagas(connection, function (error, result) {
        
        res.render("home.ejs", { vagas: result });
        
    });
}