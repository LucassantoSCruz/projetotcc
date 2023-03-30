/*Aqui é por onde o Sequelize vai se conectar com o banco de dados*/

//Importação do Sequelize
const sequelize = require('sequelize');

//Configurando a conexão com o banco
const conexao = new sequelize(

    //Nome do banco de dados
    'bd_belezura', 

    //Usuário
    'root', 
    
    //Senha
    '', 

    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00',
        port: '3307'
    }
);

//Expotação daconexão com o banco
module.exports = conexao;