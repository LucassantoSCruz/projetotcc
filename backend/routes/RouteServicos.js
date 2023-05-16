/*
***************************************************************************
*Este arquivo contém as rotas do modelo da tabela de serviços
***************************************************************************
*
* CAMPOS DA TABELA SERVICOS PARA REFERÊNCIA:
* ID_Servico, Preco, Titulo, Descricao
*
*/

//Importação do Express, do modelo e do Router do Express
const express = require('express');
const modelServicos = require('../models/ModelServicos');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD DA TABELA SERVICOS

//Rota de cadastro
router.post('/cadastrarServico', (req, res) => {
    console.log(req.body);

    //Declaração das variáveis que irão representar os campos da tabela
    let {preco, titulo, descricao, FK_Profissionais_Servicos} = req.body;

    //Crie estes campos...
    modelServicos.create(
        {preco, titulo, descricao, FK_Profissionais_Servicos}
    ).then(
        /*
        *...e então, caso dê certo, retorne este objeto JSON com o 
        *status HTTP...
        */
       () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: 'Serviço cadastrado com sucesso!'
            })
       }
    ).catch(
        /*
        *...caso "pegue" um erro, retorne este objeto JSON com o 
        *status HTTP e o objeto do erro
        */
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

    //Ache todos os registros...
    modelServicos.findAll()
    .then(
        /*
        *...e então, caso dê certo, retorne este objeto JSON com
        * o status HTTP e a listagem...
        */
       (response) => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: 'Serviços listados com sucesso!',
            data: response
        })
       }
    ).catch(
        /*
        *...caso "pegue" um erro, retorne este objeto JSON com o 
        * status HTTP e o objeto do erro
        */
       (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os clientes',
                erroObject: erro
            })
       }
    )
});

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
                mensagemStatus: 'Erro ao listar os clientes',
                erroObject: erro
            })
       }
    )
})

router.put('/alterarServicos', (req, res) =>{

    let {preco, titulo, descricao, FK_Profissionais_Servicos} = req.body;

    modelServicos.update(
        {preco, titulo, descricao, FK_Profissionais_Servicos},
        {where:{  ID_Servico }}

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
router.delete('/excluirServicos:ID_Servico', (req, res)=>{

    console.log(req.params);

    let {ID_Servico} = req.params;

    modelServicos.destroy(
        {where:{ID_Servico}}
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

//INÍCIO DAS ROTAS DE CRUD DA TABELA SERVICOS

//Exportação
module.exports = router;