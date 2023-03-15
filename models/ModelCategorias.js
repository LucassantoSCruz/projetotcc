/*Arquivo responsável pela criação da tabela "categorias"*/

//importação do Sequilize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo da tabela
const modelCategorias = conexao.define('categorias',{
    IDCategoria: {
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:sequelize.STRING(45),
        allowNull:false
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Exportação do modelo
module.exports = modelCategorias;