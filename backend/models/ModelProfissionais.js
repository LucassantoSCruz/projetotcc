/*Arquivo com o modelo da tabela "profissionais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionais = conexao.define('tbl_Profissionais', {
    //Definição dos campos e de seus atributos
    CPF_CNPJ: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    Email: {
        type: sequelize.STRING(45),
        allowNull: true
    },
    Senha: {
        type: sequelize.STRING(30),
        allowNull: true
    },
    Telefone: {
        type: sequelize.STRING(30),
        allowNull: true
    },
    AtendimentoDomiciliar: {
        type: sequelize.BOOLEAN,
        defaultValue: 0
    },
    Descricao: {
        type: sequelize.TEXT,
        allowNull: true
    },
    FotoPerfil: {
        type: sequelize.BLOB,
        allowNull: true
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Exportação do modelo
module.exports = modelProfissionais;