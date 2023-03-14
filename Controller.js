/*Esse arquivo vai ser o "index" da parte do backend*/

//Importação da conexão para criação de todas as tabelas de uma vez
const conexao = require('./database/Database')

//Importação do express
const express = require('express');

//Importação das rotas
const routeClientes = require('./routes/RouteClientes');
const routeProfissionais = require('./routes/RouteProfissionais');
const routeServicos = require('./routes/RouteServicos');
const routeCategorias = require('./routes/RouteCategorias');


//Tornando o express executável
const app = express();

//Para leitura de dados
app.use(express.json());

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeClientes);
app.use('/', routeProfissionais);
app.use('/', routeServicos);
app.use('/', routeCategorias);
//FIM DA UTILIZAÇÃO DAS ROTAS

//Sincronização de todas as tabelas
conexao.sync(); 

//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});