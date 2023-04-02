//DESATIVADA POR MOTIVOS DE TESTES

//Arquivo com o modelo da tabela que junta "profissionais" e "servicos_sociais"

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionaisServicosSociais = conexao.define('tbl_Profissionais_ServicosSociais', {}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelProfissionaisServicosSociais;
