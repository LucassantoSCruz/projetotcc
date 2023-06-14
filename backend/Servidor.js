
const conexao = require('./database/Database')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importação das rotas
const routeAgenda = require('./routes/RouteAgenda');
const routeAvaliacoes = require('./routes/RouteAvaliacoes');
const routeCategorias = require('./routes/RouteCategorias');
const routeClientes = require('./routes/RouteClientes');
const routeEnderecos = require('./routes/RouteEnderecos');
const routeStatus = require('./routes/RouteStatus');
const routeProfissionais = require('./routes/RouteProfissionais');
const routeServicos = require('./routes/RouteServicos');
const routePerfisFavoritos = require('./routes/RoutePerfisFavoritos');
const routeProfissionaisEnderecos = require('./routes/RouteProfissionaisEnderecos');

//Tornando o express executável
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});