/*
const sequelize = require('sequelize');
const conexao = require('../database/Database');
const servicosSociais = require('./ModelServicosSociais');
const clientes = require('./ModelClientes');
const profissionais = require('./ModelProfissionais');

const modelParticipantes = conexao.define('participantes', {

    organizador:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    //FK_ServicosSociais
    IDServicosSociais:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    //FK_Clientes_Participantes
    IDClientes:{
        type:sequelize.INTEGER,
        allowNull:false
    },
     //FK_Profissionais_Participantes
    IDProfissionais:{
        type:sequelize.INTEGER,
        allowNull:false
    }

})

//relacionando as chaves estrangeiras
//modelParticipantes.belongsTo(clientes, {foreignKey: 'IDClientes', allowNull:false });
//modelParticipantes.belongsTo(servicosSociais, {foreignKey: 'IDServicosSociais', allowNull:false })
//modelParticipantes.belongsTo(profissionais, {foreignKey: 'IDProfissionais', allowNull:false })



//Forçar a criação do modelo
//modelParticipantes.sync({ force: true });

//Exportação do modelo
module.exports = modelParticipantes;
*/