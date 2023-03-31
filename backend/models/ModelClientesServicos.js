/*Arquivo com o modelo da tabela que junta "clientes" e "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelClientesServicos = conexao.define('clientes_servicos', {
    
    //Definição dos campos e seus attributos
    ID_Servico_Cliente: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FK_Servicos_Clientes: {
        type: sequelize.INTEGER
    },
    FK_Clientes_Servicos: {
        type: sequelize.INTEGER
    },
    data: {
        type: sequelize.DATE
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelClientesServicos;  