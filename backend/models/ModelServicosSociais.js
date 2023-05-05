//Arquivo com o modelo da tabela "servicos_sociais"

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

const modelServicosSociais = conexao.define('tbl_ServicosSociais', {
    //Declaração dos campos
    ID:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: sequelize.DATE,
        allowNull: false
    },
    titulo:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    descricao:{
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