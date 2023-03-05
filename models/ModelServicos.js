/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelServicos = conexao.define('servico', {
    //Definição dos campos e seus attributos
    IDServico:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //FK_Categorias_Servicos: {},
    preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    },
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: sequelize.STRING,
        allowNull: false
    }
})

//Forçar a criação do modelo
modelServicos.sync({ force: true});

//Exportação do modelo
module.exports = modelServicos;