const sequelize = require('sequelize');
const conexao = require('../database/Database');
const categoria = require('./ModelCategoria');
const servicosSociais = require('./ModelServicosSociais');


const modelServicosSociais_Categorias = conexao.define('ServicosSociaisCategorias', {

    IDCategoria:{
        type: sequelize.INTEGER,
        allowNull:false
    },
    IDServicosSociais: {
        type: sequelize.INTEGER,
        allowNull:false
    }
})

//relacionando as chaves estrangeiras
modelServicosSociais_Categorias.belongsTo(categoria, {foreignKey: 'IDCategoria', allowNull:false })
modelServicosSociais_Categorias.belongsTo(servicosSociais, {foreignKey: 'IDServicosSociais', allowNull:false })


modelServicosSociaisCategorias.sync({ force:true });

//Exportação do modelo
module.exports = modelServicosSociais_Categorias;