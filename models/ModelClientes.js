/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelClientes = conexao.define('cliente', {
    //Definição de cada campo e seus atributos
    IDCliente:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //FK_Colecoes_Clientes
    //FK_Avaliações_Clientes
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
        type: sequelize.BLOB
    }
});

//Forçar a criação do modelo
//modelClientes.sync({ force:true });

//Exportação do modelo
module.exports = modelClientes;