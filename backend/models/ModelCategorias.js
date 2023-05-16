/*Arquivo responsável pela criação da tabela "categorias"*/

//importação do Sequilize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo da tabela
const modelCategorias = conexao.define('tbl_Categorias',{
    ID: {
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
    createdAt: false,
    updatedAt: false
});

//Relacionamentos

const modelServicos = require('./ModelServicos')

modelCategorias.hasMany(modelServicos, {
    foreignKey: 'FK_Categorias_Servicos'
});
modelServicos.belongsTo(modelCategorias, {
    foreignKey: 'FK_Categorias_Servicos'
});

//Exportação do modelo
module.exports = modelCategorias;