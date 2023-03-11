const sequelize = require('sequelize');
const conexao = require('../database/Database');
const profissionais = require('./ModelProfissionais');
const servicos = require('./ModelServicos');

const modelProfissionaisServicos = conexao.define('ProfissionaisServicos', {

    //FK_Servicos_Profissionais
    IDServicos:{
        type: sequelize.INTEGER,
        allowNull:false
    },
    //FK_Profissionais_Servicos
    IDProfissionais:{
        type: sequelize.INTEGER,
        allowNull:false
    }
})


//relacionando as chaves estrangeiras
modelProfissionaisServicos.belongsTo(profissionais, {foreignKey: 'IDProfissionais', allowNull:false })
modelProfissionaisServicos.belongsTo(servicos, {foreignKey: 'IDServicos', allowNull:false })


modelProfissionaisServicos.sync({ force:true });

//Exportação do modelo
module.exports = modelProfissionaisServicos;