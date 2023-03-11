const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelTelefones = conexao.define('telefones', {
    
    IDTelefone :{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    DDD :{
        type: sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: sequelize.STRING,
        allowNull: false
    }
})

modelTelefones.sync({ force:true });

//Exportação do modelo
module.exports = modelTelefones;