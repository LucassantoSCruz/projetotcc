/*Arquivo com o modelo da tabela "profissionais"*/

//Importação do sequelize e da conexão com o banco
const sequelize = require('sequelize');
const conexao = require('../database/Database');

//Importação das models
const modelProfissionaisServicos = require('./ModelProfissionaisServicos');
const modelServicos = require('./ModelServicos');
const modelTelefones = require('./ModelTelefones');
const modelHabilidadesProfissionais = require('./ModelHabilidadesProfissionais');
const modelHabilidades = require('./ModelHabilidades');
const modelAvaliacoes = require('./ModelAvaliacoes');
const modelEnderecos = require('./ModelEnderecos');
const modelServicosSociais = require('./ModelServicosSociais');
const modelProfissionaisServicosSociais = require('./ModelProfissionaisServicosSociais');
const modelColecoes = require('./ModelColecoes');
const modelProfissionaisColecoes = require('./ModelProfissionaisColecoes');
const modelProfissionaisAvaliacoes = require('./ModelProfissionaisAvaliacoes');

//Criação do modelo
const modelProfissionais = conexao.define('profissionais', {
    //Definição dos campos e de seus atributos
    cpf:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    CNPJ_CPF: {
        type: sequelize.STRING,
        allowNull: false
    },
    atendimentoDomiciliar: {
        type: sequelize.BOOLEAN,
        defaultValue: true,
        allowNull:true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    IDEnderecos: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    IDTelefones: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: true
    },
    contatoPrincipal: {
        type: sequelize.STRING,
        allowNull: true
    },
    contatoSecundario: {
        type: sequelize.STRING,
        allowNull: true
    },
    fotoPerfil: {
        type: sequelize.BLOB,
        allowNull: true
    },
}, {
    freezeTableName: true,
    createdAt: 'dataCriacao',
    updatedAt: 'ultimaModificacao'
});

//INÍCIO DA DECLARAÇÃO DOS RELACIONAMENTOS ENTRE AS MODELS

//Relacionamento com "servicos"
modelProfissionais.belongsToMany(modelServicos, {
    through: {
        model: modelProfissionaisServicos,
    },
    foreignKey: 'FK_Profissionais_Servicos',
    constraint: true,
    uniqueKey: 'profissionais_servicos'
});
modelServicos.belongsToMany(modelProfissionais, {
    through: {
        model: modelProfissionaisServicos,
    },
    foreignKey: 'FK_Servicos_Profissionais',
    constraint: true,
    uniqueKey: 'servicos_profissionais'
});

//Relacionamento com "telefones"
modelProfissionais.hasMany(modelTelefones, {
    foreignKey: 'FK_Profissionais_Telefones'
});
modelTelefones.belongsTo(modelProfissionais, {
    foreignKey: 'FK_Profissionais_Telefones'
});

//Relacionamento com "enderecos"
modelEnderecos.hasMany(modelProfissionais, {
    foreignKey: 'FK_Enderecos_Profissionais'
});
modelProfissionais.belongsTo(modelEnderecos, {
    foreignKey: 'FK_Enderecos_Profissionais'
});

//Relacionamento com "habilidades"
modelProfissionais.belongsToMany(modelHabilidades, {
    through: {
        model: modelHabilidadesProfissionais,
    },
    foreignKey: 'FK_Profissionais_Habilidades',
    constraint: true,
    uniqueKey: 'profissionais_habilidades'
})
modelHabilidades.belongsToMany(modelProfissionais, {
    through: {
        model: modelHabilidadesProfissionais,
    },
    foreignKey: 'FK_Habilidades_Profissionais',
    constraint: true,
    uniqueKey: 'habilidades_profissionais'
})

//Relacionamento com "servicos_sociais"
modelProfissionais.belongsToMany(modelServicosSociais, {
    through: {
        model: modelProfissionaisServicosSociais,
    },
    foreignKey: 'FK_Profissionais_ServicosSociais',
    constraint: true,
    uniqueKey: 'profissionais_servicosSociais'
})
modelServicosSociais.belongsToMany(modelProfissionais, {
    through: {
        model: modelProfissionaisServicosSociais,
    },
    foreignKey: 'FK_ServicosSociais_Profissionais',
    constraint: true,
    uniqueKey: 'servicosSociais_profissionais'
})

//Relacionamento com "colecoes"
modelProfissionais.belongsToMany(modelColecoes, {
    through: {
        model: modelProfissionaisColecoes,
    },
    foreignKey: 'FK_Profissionais_Colecoes',
    constraint: true,
    uniqueKey: 'profissionais_colecoes'
})
modelColecoes.belongsToMany(modelProfissionais, {
    through: {
        model: modelProfissionaisColecoes,
    },
    foreignKey: 'FK_Colecoes_Profissionais',
    constraint: true,
    uniqueKey: 'colecoes_profissionais'
})

//Relacionamento com "avaliacoes"
modelProfissionais.belongsToMany(modelAvaliacoes, {
    through: {
        model: modelProfissionaisAvaliacoes,
    },
    foreignKey: 'FK_Profissionais_Avaliacoes',
    constraint: true,
    uniqueKey: 'profissionais_avaliacoes'
})
modelAvaliacoes.belongsToMany(modelProfissionais, {
    through: {
        model: modelProfissionaisAvaliacoes,
    },
    foreignKey: 'FK_Avaliacoes_Profissionais',
    constraint: true,
    uniqueKey: 'avaliacoes_profissionais'
})

//FIM DA DECLARAÇÃO DOS RELACIONAMENTOS ENTRE AS MODELS

//Exportação do modelo
module.exports = modelProfissionais;