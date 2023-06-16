/*Aqui é por onde o Sequelize vai se conectar com o banco de dados*/

//Importação do Sequelize
const sequelize = require('sequelize');

//Configurando a conexão com o banco
const conexao = new sequelize(

    //Nome do banco de dados
    'bd_belezura',

    //Usuário
    'belezura_administrador',

    //Senha
    'Cl7Ys6^4Q1R_',

    {
        host: 'bd-belezura.mysql.database.azure.com',
        dialect: 'mysql',
        port: '3306'
    }
);

//Expotação daconexão com o banco
module.exports = conexao;