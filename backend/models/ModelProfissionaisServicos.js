/*Arquivo com o modelo da tabela que junta "profissionais" e "servicos"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionaisServicos = conexao.define('profissionais_servicos', {
    
    //Definição dos campos e seus attributos
    FK_Profissionais_Servicos: {
        type: sequelize.INTEGER
    },
    FK_Servicos_Profissionais: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelProfissionaisServicos;  