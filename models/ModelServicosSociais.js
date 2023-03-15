/*Arquivo com o modelo da tabela "servicos_sociais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models
const modelCategorias = require('./ModelCategorias');
const modelServicosSociaisCategorias = require('./ModelServicosSociaisCategorias');

const modelServicosSociais = conexao.define('servicos_sociais', {
    //Declaração dos campos
    IDServicosSociais:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: sequelize.DATE,
        allowNull:false
    },
    titulo:{
        type: sequelize.STRING,
    },
    descricao:{
        type: sequelize.STRING,
    },
    IDEndereco:{
        type: sequelize.INTEGER,
        allowNull:false
    }

}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamento com "categorias"
modelServicosSociais.belongsToMany(modelCategorias, {
    through: {
        model: modelServicosSociaisCategorias,
    },
    foreignKey: 'FK_ServicosSociais_Categorias',
    constraint: true,
    uniqueKey: 'servicosSociais_categorias'
});
modelCategorias.belongsToMany(modelServicosSociais, {
    through: {
        model: modelServicosSociaisCategorias,
    },
    foreignKey: 'FK_Categorias_ServicosSociais',
    constraint: true,
    uniqueKey: 'categorias_servicosSociais'
});

//Exportação do modelo
module.exports = modelServicosSociais;