//const {check, validationResult} = require("express-validator");
const { connect } = require("../../config/server");
const { empregosListar, empregosSalvar } = require("../controllers/empregos");
const { setVagas } = require("../models/empregos");
const dbConnection = require('../../config/db')

module.exports = {

    home: function (app) {
        app.get('/', function (req, res) {     
            res.render("home.ejs"); //vagas é um vetor com o resultado da query do bd
        })
    }, 

    anunciar: function (app) {
        app.get('/anunciar', function (req, res) {
            res.render("anunciar.ejs"); 
        })
    }, 

    contato: function (app) {
        app.get('/contato', function (req, res) {
            res.render("contato.ejs"); 
        })
    }
}



