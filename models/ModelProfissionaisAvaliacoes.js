/*Arquivo com o modelo da tabela que junta "profissionais" e "avaliacoes"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionaisAvaliacoes = conexao.define('profissionais_avaliacoes', {
    
    //Definição dos campos e seus attributos
    FK_Profissionais_Avaliacoes: {
        type: sequelize.INTEGER
    },
    FK_Avaliacoes_Profissionais: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelProfissionaisAvaliacoes;  