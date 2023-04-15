/*Arquivo responsável pela criação da tabela "categorias"*/

//importação do Sequilize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo da tabela
const modelCategorias = conexao.define('tbl_Categorias',{
    ID_Categoria: {
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Nome:{
        type:sequelize.STRING(45),
        allowNull:false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelCategorias;