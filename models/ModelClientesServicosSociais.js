/*Arquivo com o modelo da tabela que junta "clientes" e "servicos_sociais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelClientesServicosSociais = conexao.define('clientes_servicos_sociais', {
    
    //Definição dos campos e seus attributos
    FK_Clientes_ServicosSociais: {
        type: sequelize.INTEGER
    },
    FK_Clientes_ServicosSociais: {
        type: sequelize.INTEGER
    },
    organizador:{
        type: sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelClientesServicosSociais;  