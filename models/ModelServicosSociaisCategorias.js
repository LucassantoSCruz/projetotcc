/*Arquivo com o modelo da tabela que junta "servicos_sociais" e "categorias"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelServicosSociaisCategorias = conexao.define('servicosSociais_categorias', {
    
    //Definição dos campos e seus attributos
    FK_ServicosSociais_Categorias: {
        type: sequelize.INTEGER
    },
    FK_Categorias_ServicosSociais: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelServicosSociaisCategorias;  