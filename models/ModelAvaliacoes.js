const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelAvaliacoes = conexao.define('avaliacao', {

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
})

//Forçar a criação do modelo
modelAvaliacoes.sync({ force:true });

//Exportação do modelo
module.exports = modelAvaliacoes;