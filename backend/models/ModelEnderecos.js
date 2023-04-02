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
    Titulo:{
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