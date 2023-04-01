/*Arquivo com o modelo da tabela "avaliacoes"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelAvaliacoes = conexao.define('tbl_Avaliacoes', {
    //Declaração dos campos
    ID_Avaliacao:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nota:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    Titulo:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    Descricao:{
        type: sequelize.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: 'DataCriacao',
    updatedAt: 'UltimaModificacao'
})

//Exportação do modelo
module.exports = modelAvaliacoes;