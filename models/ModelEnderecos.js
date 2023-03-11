const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelEndereco = conexao.define('endereco', {

    IDEndereco:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    cidade:{
        type: sequelize.STRING,
        allowNull:false
    },
    bairro:{
        type: sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: sequelize.STRING,
        allowNull:false
    },
    estado:{
        type: sequelize.STRING,
        allowNull:false
    },
    CEP:{
        type: sequelize.STRING,
        allowNull:false
    },
    complemento:{
        type: sequelize.STRING,
        allowNull:false
    },
})

//Forçar a criação do modelo
modelEndereco.sync({ force: true });

//Exportação do modelo
module.exports = modelEndereco;