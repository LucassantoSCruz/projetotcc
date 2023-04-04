//DESATIVADA POR MOTIVOS DE TESTE

//Arquivo com o modelo da tabela que junta "clientes" e "servicos_sociais"

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelClientesServicosSociais = conexao.define('tbl_Clientes_ServicosSociais', {}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelClientesServicosSociais;
