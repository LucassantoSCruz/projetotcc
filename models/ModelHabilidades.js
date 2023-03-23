/*Arquivo com o modelo da tabela "habilidades"*/

//Importação da conexão e do Sequelize
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelHabilidades = conexao.define('habilidades', {
    //Declaração dos campos
    IDHabilidades:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:sequelize.INTEGER,
        allowNull:false
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
})

//Exportação do modelo
module.exports = modelHabilidades;