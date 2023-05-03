/*Arquivo com o modelo da tabela que junta "clientes" e "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelAgenda = conexao.define('tbl_Agenda', {
    
    //Definição dos campos e seus attributos
    ID: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: sequelize.DATE,
        allowNull: false
    },
    valorTotal: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelAgenda;  