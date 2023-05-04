/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Profissionais 
*********************************************************************
* ID, Nome, Email, Senha, Telefone, AtendimentoDomiciliar, Descricao, FotoPerfil
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
    let {ID, Nome, NomeFantasia, Pronomes, Email, Senha, Telefone, AtendimentoDomiciliar, PessoaJuridica, Descricao} = req.body;

    //Crie estes campos...
    modelProfissionais.create(
        {ID, Nome, NomeFantasia, Pronomes, Email, Senha, Telefone, AtendimentoDomiciliar, PessoaJuridica, Descricao}
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
router.get('/ListarProfissionalCNPJ/:ID', (req, res)=>{
    
    let {ID} = req.params;

    modelProfissionais.findByPk(ID)
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

//Rota de listagem por e-mail
router.get('/ListarProfissionaisEmail/:Email/:Senha', (req, res)=>{

    let {Email, Senha} = req.params;
    console.log(JSON.stringify(Email))
    console.log(JSON.stringify(Senha))

    modelProfissionais.findOne({
        attributes:['Email', 'Senha', 'ID'],
        where:{Email, Senha}})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Profissional listado com sucesso!",
                data:response
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

//Rota de Alteração
router.put('/alterarProfissionais', (req, res) =>{

    let {ID, Nome, Email, Senha, Telefone, AtendimentoDomiciliar, PessoaJuridica, Descricao} = req.body;

    modelProfissionais.update(
        {ID, Nome, Email, Senha, Telefone, AtendimentoDomiciliar, PessoaJuridica, Descricao},
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
router.delete('/excluirProfissionais:ID', (req, res)=>{

    console.log(req.params);

    let {ID} = req.params;

    modelProfissionais.destroy(
        {where:{ID}}
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