/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models
const modelClientesServicos = require('./ModelClientesServicos');
const modelServicos = require('./ModelServicos');

//Criação do modelo
const modelClientes = conexao.define('clientes', {
    //Definição de cada campo e seus atributos
    IDCliente:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false
    },
    fotoPerfil:{
        type: sequelize.BLOB,
        allowNull: false
    },
    avaliaçoesID:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    IDColecoes:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    IDAvaliacoes:{
        type:sequelize.INTEGER,
        allowNull:false
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamento com "servicos"
modelClientes.belongsToMany(modelServicos, {
    through: {
        model: modelClientesServicos,
    },
    foreignKey: 'FK_Clientes_Servicos',
    constraint: true,
    uniqueKey: 'clientes_servicos'
})
modelServicos.belongsToMany(modelClientes, {
    through: {
        model: modelClientesServicos,
    },
    foreignKey: 'FK_Servicos_Clientes',
    constraint: true,
    uniqueKey: 'servicos_clientes'
})

//Exportação do modelo
module.exports = modelClientes;