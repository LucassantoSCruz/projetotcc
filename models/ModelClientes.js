/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models
const modelClientesServicos = require('./ModelClientesServicos');
const modelClientesServicosSociais = require('./ModelClientesServicosSociais');
const modelServicos = require('./ModelServicos');
const modelServicosSociais = require('./ModelServicosSociais');
const modelColecoes = require('./ModelColecoes');

//Criação do modelo
const modelClientes = conexao.define('clientes', {
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
    IDColecoes:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    IDAvaliacoes:{
        type:sequelize.INTEGER,
        allowNull:false
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamento com "colecoes"
modelColecoes.belongsTo(modelClientes, {
    foreignKey: 'FK_Clientes_Colecoes'
})
modelClientes.hasMany(modelColecoes, {
    foreignKey: 'FK_Clientes_Colecoes'
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

//Exportação do modelo
module.exports = modelClientes;