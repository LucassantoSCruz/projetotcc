/*Arquivo com o modelo da tabela "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelServicos = conexao.define('tbl_Servicos', {
    
    //Definição dos campos e seus attributos
    ID_Servico:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
    },
    Titulo: {
        type: sequelize.STRING(100),
        allowNull: true
    },
    Descricao: {
        type: sequelize.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamentos

//Importação das models
const modelAgenda = require('./ModelAgenda');
const modelAvaliacoes = require('./ModelAvaliacoes')
const modelCategorias = require('./ModelCategorias');

//Declaração dos relacionamentos
modelServicos.hasMany(modelAgenda, {
    foreignKey: 'FK_Servicos_Agenda'
});
modelAgenda.belongsTo(modelServicos, {
    foreignKey: 'FK_Servicos_Agenda'
});

modelServicos.hasMany(modelAvaliacoes, {
    foreignKey: 'FK_Servicos_Avaliacoes'
});
modelAvaliacoes.belongsTo(modelServicos, {
    foreignKey: 'FK_Servicos_Avaliacoes'
});

modelServicos.belongsToMany(modelCategorias, {
    through: 'servicos_categorias',
    uniqueKey: 'FK_Servicos_Categorias'
});
modelCategorias.belongsToMany(modelServicos, {
    through: 'servicos_categorias',
    uniqueKey: 'FK_Categorias_Servicos'
})

//Exportação do modelo
module.exports = modelServicos;    