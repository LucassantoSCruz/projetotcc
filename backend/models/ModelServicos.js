/*Arquivo com o modelo da tabela "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelServicos = conexao.define('tbl_Servicos', {
    
    //Definição dos campos e seus attributos
    ID:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imagem: {
        type: sequelize.BLOB,
        allowNull: true
    },
    preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
    },
    titulo: {
        type: sequelize.STRING(100),
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

const modelAgenda = require('./ModelAgenda')

modelServicos.hasMany(modelAgenda, {
    foreignKey: 'FK_Servicos_Agenda'
});
modelAgenda.belongsTo(modelServicos, {
    foreignKey: 'FK_Servicos_Agenda'
});


//Exportação do modelo
module.exports = modelServicos;    