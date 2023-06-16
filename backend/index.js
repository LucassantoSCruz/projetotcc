
const conexao = require('./database/Database')
const express = require('express');
const bodyParser = require('body-parser');

//Importação das rotas
const routeAgenda = require('./controller/RouteAgenda');
const routeAvaliacoes = require('./controller/RouteAvaliacoes');
const routeCategorias = require('./controller/RouteCategorias');
const routeClientes = require('./controller/RouteClientes');
const routeEnderecos = require('./controller/RouteEnderecos');
const routeStatus = require('./controller/RouteStatus');
const routeProfissionais = require('./controller/RouteProfissionais');
const routeServicos = require('./controller/RouteServicos');
const routePerfisFavoritos = require('./controller/RoutePerfisFavoritos');
const routeProfissionaisEnderecos = require('./controller/RouteProfissionaisEnderecos');

//Tornando o express executável
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//conexao.sync({ force : true });

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeAgenda);
app.use('/', routeAvaliacoes);
app.use('/', routeCategorias);
app.use('/', routeClientes); 
app.use('/', routeEnderecos);
app.use('/', routeStatus);
app.use('/', routeProfissionais);
app.use('/', routeServicos);
app.use('/', routePerfisFavoritos);
app.use('/', routeProfissionaisEnderecos);

const port = process.env.PORT || 3000

//Servidor de requisições da aplicação
app.listen(port, ()=>{
    console.log('Servidor Rodando na Porta 3000 - URL: http://localhost3000');
}); 