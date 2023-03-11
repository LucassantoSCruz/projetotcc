const sequelize =  require('sequelize');
const conexao = require('../database/Database');

const modelCategoria = conexao.define('categoria',{

    IDCategoria: {
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:sequelize.STRING,
        allowNull:false
    }
})

//Forçar a criação do modelo
modelCategoria.sync({ force:true });

//Exportação do modelo
module.exports = modelCategoria;