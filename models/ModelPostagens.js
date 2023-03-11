const sequelize = require('sequelize');
const conexao = require('../database/Database');
const profissionais = require('./ModelProfissionais');

const modelPostagens = conexao.define('postagens', {

    IDPostagens:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    
    titulo:{
        type: sequelize.STRING,
        allowNull:false
    },
    midia:{
        type: sequelize.BLOB,
        allowNull:false
    },
    texto:{
        type: sequelize.STRING,
        allowNull:false
    },
    //FK_Profissionais_Postagens
    IDProfissionais:{
        type: sequelize.INTEGER,
        allowNull:false
    }
})


//relacionando as chaves estrangeiras
modelPostagens.belongsTo(profissionais, {foreignKey: 'IDProfissionais', allowNull:false })

//Forçar a criação do modelo
modelPostagens.sync({ force: true });

//Exportação do modelo
module.exports = modelPostagens;