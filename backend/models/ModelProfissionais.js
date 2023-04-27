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
    Nome:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    NomeFantasia:{
        type: sequelize.STRING(100),
        allowNull: true
    },
    Pronomes:{
        type: sequelize.STRING(20),
        allowNull: true
    },
    PessoaJuridica: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    Email: {
        type: sequelize.STRING(45),
        allowNull: false
    },
    Senha: {
        type: sequelize.STRING(30),
        allowNull: false
    },
    Telefone: {
        type: sequelize.STRING(30),
        allowNull: true
    },
    AtendimentoDomiciliar: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    Descricao: {
        type: sequelize.TEXT,
        allowNull: true
    },
    FotoPerfil: {
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

modelProfissionais.hasMany(modelEnderecos, {
    foreignKey: 'FK_Profissionais_Enderecos'
});
modelEnderecos.belongsTo(modelProfissionais, {
    foreignKey: 'FK_Profissionais_Enderecos'
})

modelProfissionais.belongsToMany(modelClientes, {
    through: 'perfis_favoritos', 
    uniqueKey: 'FK_Clientes_Profissionais',
    timestamps: false
});
modelClientes.belongsToMany(modelProfissionais, {
    through: 'perfis_favoritos', 
    uniqueKey: 'FK_Profissionais_Clientes',
    timestamps: false
});

//Exportação do modelo
module.exports = modelProfissionais;