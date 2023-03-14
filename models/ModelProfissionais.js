/*Arquivo com o modelo da tabela "profissionais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models
const modelProfissionaisServicos = require('./ModelProfissionaisServicos');
const modelServicos = require('./ModelServicos');

//Criação do modelo
const modelProfissionais = conexao.define('profissionais', {
    //Definição dos campos e de seus atributos
    IDProfissional:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    CNPJ_CPF: {
        type: sequelize.STRING,
        allowNull: false
    },
    atendimentoDomiciliar: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    IDEnderecos: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    IDTelefones: {
        type: sequelize.INTEGER
    },
    descricao: {
        type: sequelize.TEXT
    },
    contatoPrincipal: {
        type: sequelize.STRING
    },
    contatoSecundario: {
        type: sequelize.STRING
    },
    fotoPerfil: {
        type: sequelize.BLOB
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//INÍCIO DA DECLARAÇÃO DOS RELACIONAMENTOS ENTR AS MODELS

//Relacionamento com "servicos"
modelProfissionais.belongsToMany(modelServicos, {
    through: {
        model: modelProfissionaisServicos,
    },
    foreignKey: 'FK_Profissionais_Servicos',
    constraint: true,
    uniqueKey: 'profissionais_servicos'
})
modelServicos.belongsToMany(modelProfissionais, {
    through: {
        model: modelProfissionaisServicos,
    },
    foreignKey: 'FK_Servicos_Profissionais',
    constraint: true,
    uniqueKey: 'servicos_profissionais'
})

//FIM DA DECLARAÇÃO DOS RELACIONAMENTOS ENTR AS MODELS

//Exportação do modelo
module.exports = modelProfissionais;