const express = require('express');
const modelServicos = require('../models/ModelServicos');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD DA TABELA SERVICOS

//Rota de cadastro
router.post('/cadastrarServico', (req, res) => {
    console.log(req.body);

    let {preco, titulo, descricao, FK_Profissionais_Servicos} = req.body;

    modelServicos.create(
        {preco, titulo, descricao, FK_Profissionais_Servicos}
    ).then(
       () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: 'Serviço cadastrado com sucesso!'
            })
       }
    ).catch(
       (erro) => {
            return res.status(201).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao cadastrar serviço',
                erroObject: erro
            })
       }
    )
});

//Rota de listagem
router.get('/listarServicos', (req, res) => {

    modelServicos.findAll()
    .then(
       (response) => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: 'Serviços listados com sucesso!',
            data: response
        })
       }
    ).catch(
       (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os serviços',
                erroObject: erro
            })
       }
    )
});

router.get('/listarServicosID/:ID', (req, res) => {
    
    let {ID} = req.params;

    modelServicos.findByPk(ID)
    .then(
       (response) => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: 'Serviços listados com sucesso!',
            data: response
        })
       }
    ).catch(
       (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os serviços',
                erroObject: erro
            })
       }
    )
})

router.get('/listarServicosFK/:CPF_CNPJ', (req, res) => {
    
    let {CPF_CNPJ} = req.params;

    modelServicos.findAll({where: { FK_Profissionais_Servicos : CPF_CNPJ }})
    .then(
       (response) => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: 'Serviços listados com sucesso!',
            data: response
        })
       }
    ).catch(
       (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os serviços',
                erroObject: erro
            })
       }
    )
})

router.get('/ListarTodaInfoServicos', (req, res) => {
    modelServicos.findAll({ include: { all: true, nested: true } })
    .then(
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: "Serviços e informações listados com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "Erro ao listar Serviços e Informações!",
                erroObject: erro
            });
        }
    )
})

router.put('/alterarServicos/:ID', (req, res) =>{

    let {preco, titulo, descricao} = req.body;
    let {ID} = req.params;

    modelServicos.update(
        {preco, titulo, descricao},
        {where:{  ID }}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Cliente alterado com sucesso!'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao alterar',
                errorObject:error
            })
        }
    )

})

//Rota de Exclusão
router.delete('/excluirServicos/:ID', (req, res)=>{

    console.log(req.params);

    let {ID} = req.params;

    modelServicos.destroy(
        {where:{ID}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Serviço excluido'
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:'Erro ao excluir',
                errorObject:error
            })
        }
    )

   
})

//Exportação
module.exports = router;