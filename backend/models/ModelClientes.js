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
    FotoPerfil:{
        type: Sequelize.BLOB,
        allowNull: true
    },
    Telefone: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    Pronomes:{
        type: Sequelize.STRING(20),
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamentos

//Importação das models
const modelAgenda = require('./ModelAgenda');
const modelAvaliacoes = require('./ModelAvaliacoes');

//Declaração dos relacionamentos
modelClientes.hasMany(modelAgenda, {
    foreignKey: 'FK_Clientes_Agenda'
});
modelAgenda.belongsTo(modelClientes, {
    foreignKey: 'FK_Clientes_Agenda'
});

modelClientes.hasMany(modelAvaliacoes, {
    foreignKey: 'FK_Clientes_Avaliacoes'
});
modelAvaliacoes.belongsTo(modelAvaliacoes, {
    foreignKey: 'FK_Clientes_Avaliacoes'
});



//Exportação do modelo
module.exports = modelClientes;