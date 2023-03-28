/*Arquivo com o modelo da tabela de "colecoes"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelColecoes = conexao.define('colecoes', {
    //Declaraçao dos campos
    IDColecao:{ 
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    }
})

//Exportação do modelo
module.exports = modelColecoes; 