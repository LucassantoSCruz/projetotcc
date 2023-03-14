/*Arquivo com o modelo da tabela que junta "profissionais" e "colecoes"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionaisColecoes = conexao.define('profissionais_colecoes', {
    
    //Definição dos campos e seus attributos
    FK_Profissionais_Colecoes: {
        type: sequelize.INTEGER
    },
    FK_Colecoes_Profissionais: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelProfissionaisColecoes;  