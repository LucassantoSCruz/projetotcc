/*Arquivo com o modelo da tabela que junta "profissionais" e "habilidades"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelHabilidadesProfissionais = conexao.define('habilidades_profissionais', {
    
    //Definição dos campos e seus attributos
    FK_Habilidades_Profissionais: {
        type: sequelize.INTEGER
    },
    FK_Profissionais_Habilidades: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelHabilidadesProfissionais;  