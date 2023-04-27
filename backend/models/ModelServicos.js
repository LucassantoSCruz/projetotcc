/*Arquivo com o modelo da tabela "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelServicos = conexao.define('tbl_Servicos', {
    
    //Definição dos campos e seus attributos
    ID_Servico:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Imagem: {
        type: sequelize.BLOB,
        allowNull: true
    },
    Preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
    },
    Titulo: {
        type: sequelize.STRING(100),
        allowNull: true
    },
    Descricao: {
        type: sequelize.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Exportação do modelo
module.exports = modelServicos;    