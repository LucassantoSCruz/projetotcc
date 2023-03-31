/*Arquivo com o modelo da tabela que junta "profissionais" e "servicos_sociais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Criação do modelo
const modelProfissionaisServicosSociais = conexao.define('profissionais_servicos_sociais', {
    
    //Definição dos campos e seus attributos
    FK_Profissionais_ServicosSociais: {
        type: sequelize.INTEGER
    },
    FK_ServicosSociais_Profissionais: {
        type: sequelize.INTEGER
    },
    organizador:{
        type: sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

//Exportação do modelo
module.exports = modelProfissionaisServicosSociais;  