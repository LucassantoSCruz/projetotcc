/*Arquivo com o modelo da tabela "profissionais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelServicosSociais = conexao.define('servicos_sociais', {
    //Declaração dos campos
    IDServicosSociais:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: sequelize.DATE,
        allowNull:false
    },
    titulo:{
        type: sequelize.STRING,
    },
    descricao:{
        type: sequelize.STRING,
    },
    IDEndereco:{
        type: sequelize.INTEGER,
        allowNull:false
    }

}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
})

//Exportação do modelo
module.exports = modelServicosSociais;