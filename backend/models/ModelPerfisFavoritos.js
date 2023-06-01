const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo da tabela
const modelPerfisFavoritos = conexao.define('perfis_favoritos',{}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelPerfisFavoritos;