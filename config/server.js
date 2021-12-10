let express = require('express'); // O express retorna uma função

let app = express(); //express é uma função.
let port = 3000;

app.set("view engine", "ejs");
app.set("views", "./app/views");

//app.use(express.json);
//app.use(express.urlencoded({extended: true}));

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});


/*app.get('/cadastro', function(req, res){
	let pagina = '<html><body>Página de Cadastro</body></html>';
	res.send(pagina);
})*/



module.exports = app;

