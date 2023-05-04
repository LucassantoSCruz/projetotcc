/*Arquivo com o modelo da tabela "avaliacoes"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelAvaliacoes = conexao.define('tbl_Avaliacoes', {
    //Declaração dos campos
    ID:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nota:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    titulo:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
})

//Exportação do modelo
module.exports = modelAvaliacoes;