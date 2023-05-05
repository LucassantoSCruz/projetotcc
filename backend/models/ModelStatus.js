const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo da tabela
const modelStatus = conexao.define('tbl_status',{
    ID: {
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titulo:{
        type:sequelize.STRING(45),
        allowNull:false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

const modelAgenda = require('./ModelAgenda');

modelStatus.hasMany(modelAgenda, {
    foreignKey: 'FK_Status_Agenda'
});
modelAgenda.belongsTo(modelStatus, {
    foreignKey: 'FK_Status_Agenda'
});

//Exportação do modelo
module.exports = modelStatus;