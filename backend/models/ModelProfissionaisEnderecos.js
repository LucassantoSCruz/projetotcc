const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo da tabela
const modelProfissionaisEnderecos = conexao.define('profissionais_enderecos',{}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelProfissionaisEnderecos;