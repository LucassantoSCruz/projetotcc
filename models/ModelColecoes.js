/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models
const modelProfissionais = require('./ModelProfissionais');
const modelProfissionaisColecoes = require('./ModelProfissionaisColecoes');

//Criação do modelo
const modelColecoes = conexao.define('colecoes', {
    //Declaraçao dos campos
    IDColecao:{ 
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    IDProfissionais:{
        type:sequelize.INTEGER,
        allowNull:false
    }
})

//Relacionamentos

//Relacionamento com "habilidades"
modelColecoes.belongsToMany(modelProfissionais, {
    through: {
        model: modelProfissionaisColecoes,
    },
    foreignKey: 'FK_Colecoes_Profissionais',
    constraint: true,
    uniqueKey: 'colecoes_profissionais'
})
modelProfissionais.belongsToMany(modelColecoes, {
    through: {
        model: modelProfissionaisColecoes,
    },
    foreignKey: 'FK_Profissionais_Colecoes',
    constraint: true,
    uniqueKey: 'profissionais_colecoes'
})

//Exportação do modelo
module.exports = modelColecoes;