const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app);
routes.anunciar(app);
routes.contato(app);

let express = require('express'); // O express retorna uma função

app.use(express.static('public'))
            app.use('/styles', express.static(__dirname + 'public/styles'))
            app.use('/scripts', express.static(__dirname + 'public/scripts'))
            app.use('/assets', express.static(__dirname + 'public/assets'))
            app.use('/bootstrap', express.static(__dirname + 'public/bootstrap'))