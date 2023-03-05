/*Esse arquivo vai ser o "index" da parte do backend*/

//Importação do express
const express = require('express');

//Importação das rotas
const routeClientes = require('./routes/RouteClientes');
const routeProfissionais = require('./routes/RouteProfissionais');
const routeServicos = require('./routes/RouteServicos');

//Tornando o express executável
const app = express();

//Para leitura de dados
app.use(express.json());

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeClientes);
app.use('/', routeProfissionais);
app.use('/', routeServicos);
//FIM DA UTILIZAÇÃO DAS ROTAS



//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});