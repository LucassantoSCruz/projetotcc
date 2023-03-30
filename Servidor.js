
const conexao = require('./database/Database')
const express = require('express');

//Importação das rotas
const routeClientes = require('./routes/RouteClientes');
const routeProfissionais = require('./routes/RouteProfissionais');
const routeServicos = require('./routes/RouteServicos');
const routeCategorias = require('./routes/RouteCategorias');



//Tornando o express executável
const app = express();
app.use(express.json());
//conexao.sync({ force : true }); 

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeClientes);
app.use('/', routeProfissionais);
app.use('/', routeServicos);
app.use('/', routeCategorias);

//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});