/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
//const { TabRouter } = require('@react-navigation/native');
const Sequelize = require('sequelize');
const conexao = require('../database/Database');
const modelAvaliacoes = require('./ModelAvaliacoes');

//Importação das models
const modelClientesServicos = require('./ModelClientesServicos');
const modelClientesServicosSociais = require('./ModelClientesServicosSociais');
const modelColecoes = require('./ModelColecoes');
const modelServicos = require('./ModelServicos');
const modelServicosSociais = require('./ModelServicosSociais');

//Criação do modelo
const modelClientes = conexao.define('clientes', {
    //Definição de cada campo e seus atributos
    cpf:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    fotoPerfil:{
        type: Sequelize.BLOB,
        allowNull: true
    },
    cep:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    avaliaçoesID:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    IDColecoes:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    IDAvaliacoes:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamento com "servicos"
modelClientes.belongsToMany(modelServicos, {
    through: {
        model: modelClientesServicos,
    },
    foreignKey: 'FK_Clientes_ServicosSociais',
    constraint: true,
    uniqueKey: 'clientes_servicos'
})
modelServicos.belongsToMany(modelClientes, {
    through: {
        model: modelClientesServicos,
    },
    foreignKey: 'FK_ServicosSociais_Clientes',
    constraint: true,
    uniqueKey: 'servicos_clientes'
})

//Relacionamento com "servicos_sociais"
modelClientes.belongsToMany(modelServicosSociais, {
    through: {
        model: modelClientesServicosSociais,
    },
    foreignKey: 'FK_Clientes_ServicosSociais',
    constraint: true,
    uniqueKey: 'profissionais_servicos_clientes'
})
modelServicosSociais.belongsToMany(modelClientes, {
    through: {
        model: modelClientesServicosSociais,
    },
    foreignKey: 'FK_ServicosSociais_Clientes',
    constraint: true,
    uniqueKey: 'servicos_sociais_clientes'
})

//Relacionamento com "colecoes"
modelClientes.hasMany(modelColecoes, {
    foreignKey: 'FK_Colecoes_Clientes'
});
modelColecoes.belongsTo(modelClientes, {
    foreignKey: 'FK_Colecoes_Clientes'
}) 

//Relacionamento com "avaliacoes"
modelClientes.hasMany(modelAvaliacoes, {
    foreignKey: 'FK_Avaliacoes_Clientes'
});
modelAvaliacoes.belongsTo(modelClientes, {
    foreignKey: 'FK_Avaliacoes_Clientes'
}) 

//Exportação do modelo
module.exports = modelClientes;