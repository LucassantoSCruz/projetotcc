/*Arquivo com o modelo da tabela "enderecos*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelEnderecos = conexao.define('tbl_Enderecos', {
    //Declaração do campos
    ID_Endereco:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Latitude:{
        type: sequelize.DECIMAL,
        allowNull: false
    },
    Longitude:{
        type: sequelize.DECIMAL,
        allowNull: false
    },
    CEP:{
        type: sequelize.STRING,
        allowNull: false
    },
    UF:{
        type: sequelize.STRING,
        allowNull: true
    },
    LocalidadeCidade:{
        type: sequelize.STRING,
        allowNull: true
    },
    Logradouro:{
        type: sequelize.STRING,
        allowNull: true
    },
    Bairro:{
        type: sequelize.STRING,
        allowNull: true
    },
    Numero:{
        type: sequelize.STRING,
        allowNull: true
    },
    Complemento:{
        type: sequelize.STRING,
        allowNull: true
    },
    
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
})

//Exportação do modelo
module.exports = modelEnderecos;