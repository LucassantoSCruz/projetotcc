/*Arquivo com o modelo da tabela "profissionais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionais = conexao.define('profissionais', {
    //Definição dos campos e de seus atributos
    // CNPJ: {
    //     type: sequelize.STRING,
    //     primaryKey: true,
    //     allowNull: false
    // },
    // nome:{
    //     type: sequelize.STRING,
    //     allowNull: false
    // },
    id_profissional: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    // atendimentoDomiciliar: {
    //     type: sequelize.BOOLEAN,
    //     defaultValue: false
    // },
    // descricao: {
    //     type: sequelize.TEXT
    // },
    // fotoPerfil: {
    //     type: sequelize.BLOB
    // },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//modelProfissionais.sync({ force : true }); 

//FIM DA DECLARAÇÃO DOS RELACIONAMENTOS ENTRE AS MODELS

//Exportação do modelo
module.exports = modelProfissionais;