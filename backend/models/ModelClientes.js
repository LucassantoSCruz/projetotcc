/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
//const { TabRouter } = require('@react-navigation/native');
const Sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelClientes = conexao.define('tbl_Clientes', {
    //Definição de cada campo e seus atributos
    CPF:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    Nome:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING(45),
        allowNull: false
    },
    Senha:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Descricao:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    FotoPerfil:{
        type: Sequelize.BLOB,
        allowNull: true
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Exportação do modelo
module.exports = modelClientes;