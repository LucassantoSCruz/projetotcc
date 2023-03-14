/*Arquivo com o modelo da tabela "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models relacionadas
const modelCategorias = require('./ModelCategorias');
const modelCategoriasServicos = require('./ModelCategoriasServicos');

//Criação do modelo
const modelServicos = conexao.define('servicos', {
    
    //Definição dos campos e seus attributos
    IDServico:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    },
    titulo: {
        type: sequelize.STRING(45),
        allowNull: false
    },
    duracao: {
        type: sequelize.STRING(20),
        allowNull: false
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//Relacionamentos
modelServicos.belongsToMany(modelCategorias, {
    through: {
        model: modelCategoriasServicos
    },
    foreignKey: 'FK_Servicos_Categorias',
    constraint: true,
    uniqueKey: 'servicos_categorias'
})
modelCategorias.belongsToMany(modelServicos, {
    through: {
        model: modelCategoriasServicos
    },
    foreignKey: 'FK_Categorias_Servicos',
    constraint: true,
    uniqueKey: 'categorias_servicos'
})

//Exportação do modelo
module.exports = modelServicos;    