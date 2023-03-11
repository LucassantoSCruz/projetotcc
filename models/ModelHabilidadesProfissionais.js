const sequelize = require('sequelize');
const conexao = require('../database/Database');
const habilidades = require('./ModelHabilidades');
const profissionais = require('./ModelProfissionais')


const modelHabilidadesProfissionais = conexao.define('HabilidadesProfissionais', {

    //FK_Habilidades_Profissionais
    IDHabilidades:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    //FK_Profissionais_Habilidades
    IDProfissionais:{
        type:sequelize.INTEGER,
        allowNull:false
    }
})

//relacionando as chaves estrangeiras
modelHabilidadesProfissionais.belongsTo(profissionais, {foreignKey: 'IDProfissionais', allowNull:false })
modelHabilidadesProfissionais.belongsTo(habilidades, {foreignKey: 'IDHabilidades', allowNull:false })

//Forçar a criação do modelo
modelHabilidadesProfissionais.sync({ force: true });

//Exportação do modelo
module.exports = modelHabilidadesProfissionais;