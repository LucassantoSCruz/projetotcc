/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Profissionais 
*********************************************************************
*
*CAMPOS DA TABELA PROFISSIONAIS PARA REFERÊNCIA:
* IDProfissional, nome, CNPJ_CPF, atendimentoDomiciliar, email, senha,  
* descricao, contatoPrincipal, contatoSecundario, fotoPerfil
*
* FK_Enderecos_Profissionais, FK_Telefones_Profissionais
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
    let {
            IDProfissional, nome, CNPJ_CPF, atendimentoDomiciliar, email, 
            senha, descricao, contatoPrincipal, contatoSecundario, fotoPerfil
        } = req.body;

    //Crie estes campos...
    modelProfissionais.create(
        {
            IDProfissional, nome, CNPJ_CPF, 
            atendimentoDomiciliar, email, senha, descricao, 
            contatoPrincipal, contatoSecundario, fotoPerfil
        }
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

//Rota de Alteração
router.put('/alterarProfissionais', (req, res) =>{

    let {
        IDProfissional, nome, CNPJ_CPF, atendimentoDomiciliar, email, 
        senha, descricao, contatoPrincipal, contatoSecundario, fotoPerfil
    } = req.body;

    modelProfissionais.update(
        { nome, CNPJ_CPF, atendimentoDomiciliar, email, 
            senha, descricao, contatoPrincipal, contatoSecundario, fotoPerfil},
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
router.delete('/excluirProfissionais:IDProfissional', (req, res)=>{

    console.log(req.params);

    let {IDProfissional} = req.params;

    modelProfissionais.destroy(
        {where:{IDProfissional}}
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