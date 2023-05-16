/*Arquivo com o modelo da tabela "enderecos*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelEnderecos = conexao.define('tbl_Enderecos', {
    //Declaração do campos
    ID:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    latitude:{
        type: sequelize.DOUBLE,
        allowNull: false
    },
    longitude:{
        type: sequelize.DOUBLE,
        allowNull: false
    },
    cep:{
        type: sequelize.STRING(25),
        allowNull: false
    },
    uf:{
        type: sequelize.STRING(5),
        allowNull: true
    },
    localidadeCidade:{
        type: sequelize.STRING(50),
        allowNull: true
    },
    logradouro:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    bairro:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    numero:{
        type: sequelize.STRING(10),
        allowNull: false
    },
    complemento:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

//Exportação do modelo
module.exports = modelEnderecos;