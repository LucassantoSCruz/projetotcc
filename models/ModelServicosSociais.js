const sequelize = require('sequelize');
const conexao = require('../database/Database');
const enderecos = require('./ModelEnderecos');

const modelServicoSociais = conexao.define('servicosSociais', {

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
    //FK_Enderecos_ServicosSociais
    IDEndereco:{
        type: sequelize.INTEGER,
        allowNull:false
    }

})


//relacionando as chaves estrangeiras
modelServicoSociais.belongsTo(enderecos, {foreignKey: 'IDEndereco', allowNull:false })



modelServicoSociais.sync({ force:true });

//Exportação do modelo
module.exports = modelServicoSociais;