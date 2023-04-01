//Arquivo com o modelo da tabela "servicos_sociais"

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelServicosSociais = conexao.define('tbl_ServicosSociais', {
    //Declaração dos campos
    ID_ServicoSocial:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Data:{
        type: sequelize.DATE,
        allowNull: false
    },
    Titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    Descricao:{
        type: sequelize.TEXT,
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});


//Exportação do modelo
module.exports = modelServicosSociais;