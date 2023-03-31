/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Profissionais 
*********************************************************************
* CNPJ, nome, email, senha, atendimentoDomiciliar, descricao, fotoPerfil
*/

//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelProfissionais = require('../models/ModelProfissionais');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE PROFISSIONAIS

//Rota de cadastro
router.post('/cadastrarProfissonal', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {CNPJ, nome, email, senha, atendimentoDomiciliar, descricao} = req.body;

    //Crie estes campos...
    modelProfissionais.create(
        {CNPJ, nome, email, senha, atendimentoDomiciliar, descricao}
    ).then(
        //...e então, caso dê certo, retorne este objeto JSON com o status HTTP...
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Profissional cadastrado com sucesso!"
            })
        }
    ).catch(
        /*
        * ...caso "pegue" um erro, envie este arquivo JSON com o status HTTP e
        * o objeto de erro
        */
       (erro) => {
        return res.status(201).json({
            erroStatus: true,
            mensagemStatus: "Erro ao cadastrar profissoinal",
            erroObject: erro
        })
       }
    )
});

//Rota de listagem
router.get('/listagemProfissionais', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelProfissionais.findAll()
    .then(
        /*
        *...e então, caso dê certo, envie este arquivo JSON 
        *com o status HTTP e a listagem...
        */
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Profissionais listados com sucesso!',
                data: response
            })        
        }
    ).catch(
        /*
        *...caso "pegue" um erro, retorne este objeto JSON com o 
        *status HTTP e o objeto de erro
        */
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao listar os profissionais',
                erroObject: erro
            })
        }
    )
});

//Rota de listagem por CNPJ
router.get('/ListarProfissionalCNPJ/:CNPJ', (req, res)=>{
    
    let {CNPJ} = req.params;

    AvatarModel.findByPk(CNPJ)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Profissional listado com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Profissional!",
                erroObject:erro
            });
        }
    )
});

//Rota de listagem por nome_avatar
router.get('/ListarProfissionaisNome/:nome', (req, res)=>{

    let {nome_avatar} = req.params;

    AvatarModel.findOne({where:{nome_avatar}})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Avatar listado com sucesso!",
                data:response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).jason({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Avatar!",
                erroObject:erro
            });
        }
    )
});

//Rota de Alteração
router.put('/alterarProfissionais', (req, res) =>{

    let {CNPJ, nome, email, senha, atendimentoDomiciliar, descricao} = req.body;

    modelProfissionais.update(
        {CNPJ, nome, email, senha, atendimentoDomiciliar, descricao},
        {where:{ IDProfissional}}

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
router.delete('/excluirProfissionais:CNPJ', (req, res)=>{

    console.log(req.params);

    let {CNPJ} = req.params;

    modelProfissionais.destroy(
        {where:{CNPJ}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Profissional excluido'
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

//FIM DAS ROTAS DE CRUD TABELA DE PROFISSIONAIS

//Exportação das rotas
module.exports = router;