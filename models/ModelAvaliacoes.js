/*Arquivo com o modelo da tabela "avaliacoes"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelAvaliacoes = conexao.define('avaliacoes', {
    //Declaração dos campos
    IDAvaliacao:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
})

//Exportação do modelo
module.exports = modelAvaliacoes;