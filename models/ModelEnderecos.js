/*Arquivo com o modelo da tabela "enderecos*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação da models
const modelServicosSociais = require('./ModelServicosSociais');

const modelEnderecos = conexao.define('enderecos', {
    //Declaração do campos
    IDEndereco:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    cidade:{
        type: sequelize.STRING,
        allowNull:false
    },
    bairro:{
        type: sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: sequelize.STRING,
        allowNull:false
    },
    estado:{
        type: sequelize.STRING,
        allowNull:false
    },
    CEP:{
        type: sequelize.STRING,
        allowNull:false
    },
    complemento:{
        type: sequelize.STRING,
        allowNull:false
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
})

//Relacionamento com "servicos_sociais"
modelEnderecos.hasMany(modelServicosSociais, {
    foreignKey: 'FK_Enderecos_ServicosSociais'
});
modelServicosSociais.belongsTo(modelEnderecos, {
    foreignKey: 'FK_Enderecos_ServicosSociais'
}) 

//Exportação do modelo
module.exports = modelEnderecos;