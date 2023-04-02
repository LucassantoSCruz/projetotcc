
const conexao = require('./database/Database')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importação das rotas
const routeAgenda = require('./routes/RouteAgenda');
const RouteAvaliacoes = require('./routes/RouteAvaliacoes');
const routeCategorias = require('./routes/RouteCategorias');
const routeClientes = require('./routes/RouteClientes');
const RouteEnderecos = require('./routes/RouteEnderecos');
//const routeMapa = require('./routes/RouteMapa');
const routeProfissionais = require('./routes/RouteProfissionais');
const routeServicos = require('./routes/RouteServicos');
const RouteServicosSociais = require('./routes/RouteServicosSociais');

//Tornando o express executável
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//conexao.sync({ force : true }); 

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeAgenda);
app.use('/', RouteAvaliacoes);
app.use('/', routeCategorias);
app.use('/', routeClientes);
app.use('/', RouteEnderecos);
//app.use('/', routeMapa);
app.use('/', routeProfissionais);
app.use('/', routeServicos);
app.use('/', RouteServicosSociais);

//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});