/*Arquivo com o modelo da tabela "enderecos*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelEnderecos = conexao.define('enderecos', {
    //Declaração do campos
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
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
})

//Exportação do modelo
module.exports = modelEnderecos;