const sequelize = require('sequelize');
const conexao = require('../database/Database');
const avaliacao = require('./ModelAvaliacoes')
const profissionais = require('./ModelProfissionais');


const modelProfissionaisAvaliacoes = conexao.define('profissionaisAvaliacoes', {

   //FK_Avaliacoes_Profissionais
    IDAvaliacoes:{
        type: sequelize.INTEGER,
        allowNull:false
    },
    //FK_Profissionais_Avaliacoes
    IDProfissionais: {
        type: sequelize.INTEGER,
        allowNull:false
    }
})

//relacionando as chaves estrangeiras
modelProfissionaisAvaliacoes.belongsTo(avaliacao, {foreignKey: 'IDAvaliacoes', allowNull:false })
modelProfissionaisAvaliacoes.belongsTo(profissionais, {foreignKey: 'IDProfissionais', allowNull:false })


modelProfissionaisAvaliacoes.sync({ force:true });

//Exportação do modelo
module.exports = modelProfissionaisAvaliacoes;
