/*Arquivo com o modelo da tabela que junta "categorias" e "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelCategoriasServicos = conexao.define('categorias_servicos', {
    
    //Definição dos campos e seus attributos
    FK_Categorias_Servicos: {
        type: sequelize.INTEGER
    },
    FK_Servicos_Categorias: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelCategoriasServicos;  