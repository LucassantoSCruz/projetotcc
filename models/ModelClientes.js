/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');
const colecoes = require('./ModelColecoes');
const avaliacoes = require('./ModelAvaliacoes');


//Criação do modelo
const modelClientes = conexao.define('cliente', {
    //Definição de cada campo e seus atributos
    IDCliente:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false
    },
    fotoPerfil:{
        type: sequelize.BLOB,
        allowNull: false
    },
    avaliaçoesID:{
        type: sequelize.INTEGER,
        allowNull: false
    },
     //FK_Colecoes_Clientes
    IDColecoes:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    //FK_Avaliações_Clientes
    IDAvaliacoes:{
        type:sequelize.INTEGER,
        allowNull:false
    }

});

modelClientes.belongsTo(colecoes, {foreignKey:'IDColecoes', allowNull:false})
modelClientes.belongsTo(avaliacoes, {foreignKey:'IDAvaliacoes', allowNull:false})


//Forçar a criação do modelo
modelClientes.sync({ force:true });

//Exportação do modelo
module.exports = modelClientes;