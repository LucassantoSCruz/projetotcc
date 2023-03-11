/*Arquivo com o modelo da tabela de clientes*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');
const categoria = require('./ModelCategoria');

//Criação do modelo
const modelServicos = conexao.define('servico', {
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
        type: sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: sequelize.STRING,
        allowNull: false
    },
     //FK_Categorias_Servicos: {},
    IDCategoria:{
        type: sequelize.INTEGER,
        allowNull: false
    }
})

//relacionando as chaves estrangeiras
modelServicos.belongsTo(categoria, {foreignKey: 'IDCategoria', allowNull:false })


//Forçar a criação do modelo
modelServicos.sync({ force: true});

//Exportação do modelo
module.exports = modelServicos;