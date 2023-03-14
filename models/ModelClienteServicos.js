const sequelize = require('sequelize');
const conexao = require('../database/Database');
const servicos = require('./ModelServicos')
const clientes = require('./ModelClientes');

const modelClienteServicos = conexao.define('clienteServicos', {

    IDClienteServicos:{
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    data:{
        type: sequelize.DATE,
        allowNull: false
    },
    //FK_SERVICOS_CLIENTES
    IDServicos:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    //FK_CLIENTE_SERVICOS
    IDClientes:{
        type:sequelize.INTEGER,
        allowNull:false
    }
})

//modelClienteServicos.belongsTo(servicos, {foreignKey:'IDServicos', allowNull:false})
//modelClienteServicos.belongsTo(clientes, {foreignKey:'IDClientes', allowNull:false})

//Forçar a criação do modelo
//modelClienteServicos.sync({ force: true });

//Exportação do modelo
module.exports = modelClienteServicos;

