/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
//const { TabRouter } = require('@react-navigation/native');
const Sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelClientes = conexao.define('tbl_Clientes', {
    //Definição de cada campo e seus atributos
    CPF:{
        type: Sequelize.STRING(30),
        primaryKey: true,
        allowNull:false
    },
    nome:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(45),
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    fotoPerfil:{
        type: Sequelize.BLOB,
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    pronomes:{
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