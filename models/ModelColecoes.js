/*
const sequelize = require('sequelize');
const conexao = require('../database/Database');
const profissionais = require('./ModelProfissionais')

const modelColecoes = conexao.define('colecoes', {

    IDColecao:{ 
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    //Profissionais_Colecoes_FK
    IDProfissionais:{
        type:sequelize.INTEGER,
        allowNull:false
    }
})

//modelColecoes.belongsTo(profissionais,{foreignKey:'IDProfissionais', allowNull:false})

//Forçar a criação do modelo
//modelColecoes.sync({ force: true });

//Exportação do modelo
module.exports = modelColecoes;
*/
