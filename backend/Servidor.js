
const conexao = require('./database/Database')
const express = require('express');

//Importação das rotas
const routeProfissionais = require('./routes/RouteProfissionais');




//Tornando o express executável
const app = express();
app.use(express.json());
// conexao.sync({ force : true }); 

//INÍCIO DA UTILIZAÇÃO DAS ROTAS
app.use('/', routeProfissionais);

//Criação do webserver local
app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});