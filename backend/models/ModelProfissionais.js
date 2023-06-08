/*Arquivo com o modelo da tabela "profissionais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionais = conexao.define('tbl_Profissionais', {
    //Definição dos campos e de seus atributos
    CPF_CNPJ: {
        type: sequelize.STRING(30),
        primaryKey: true
    },
    nome:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    nomeFantasia:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    pronomes:{
        type: sequelize.STRING(20),
        allowNull: true
    },
    pessoaJuridica: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    email: {
        type: sequelize.STRING(45),
        allowNull: false
    },
    senha: {
        type: sequelize.STRING(30),
        allowNull: false
    },
    telefone: {
        type: sequelize.STRING(30),
        allowNull: true
    },
    atendimentoDomiciliar: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: true
    },
    fotoPerfil: {
        type: sequelize.BLOB,
        allowNull: true
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamentos

//Importações das models
const modelServicos = require('./ModelServicos');
const modelAgenda = require('./ModelAgenda');
const modelClientes = require('./ModelClientes');
const modelEnderecos = require('./ModelEnderecos');
const modelPerfisFavoritos = require('./ModelPerfisFavoritos');
const modelProfissionaisEnderecos = require('./ModelProfissionaisEnderecos')

//Declaração dos relacionamentos
modelProfissionais.hasMany(modelServicos, {
    foreignKey: 'FK_Profissionais_Servicos'
});
modelServicos.belongsTo(modelProfissionais, {
    foreignKey: 'FK_Profissionais_Servicos'
});

modelProfissionais.hasMany(modelAgenda, {
    foreignKey: 'FK_Profissionais_Agenda'
});
modelAgenda.belongsTo(modelProfissionais, {
    foreignKey: 'FK_Profissionais_Agenda'
});

modelEnderecos.belongsToMany(modelProfissionais, {
    through: modelProfissionaisEnderecos,
    foreignKey: 'FK_Enderecos_Profissionais',
    timestamps: false
});
modelProfissionais.belongsToMany(modelEnderecos, {
    through: modelProfissionaisEnderecos,
    foreignKey: 'FK_Profissionais_Enderecos',
    timestamps: false
});

modelProfissionais.belongsToMany(modelClientes, {
    through: modelPerfisFavoritos, 
    foreignKey: 'FK_Profissionais_Clientes',
    timestamps: false
});
modelClientes.belongsToMany(modelProfissionais, {
    through: modelPerfisFavoritos, 
    foreignKey: 'FK_Clientes_Profissionais',
    timestamps: false
});

//Exportação do modelo
module.exports = modelProfissionais;