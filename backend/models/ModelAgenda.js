/*Arquivo com o modelo da tabela que junta "clientes" e "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelAgenda = conexao.define('tbl_Agenda', {
    
    //Definição dos campos e seus attributos
    ID_ServicoAgendado: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Data: {
        type: sequelize.DATE
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelAgenda;  