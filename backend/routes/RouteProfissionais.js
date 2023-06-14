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
const modelServicos = require('../models/ModelServicos');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE PROFISSIONAIS

//Rota de cadastro
router.post('/cadastrarProfissonal', (req, res) => {
    console.log(req.body);
    
    let {CPF_CNPJ, nome, nomeFantasia, pronomes, pessoaJuridica, email, senha, telefone, atendimentoDomiciliar, descricao} = req.body;

    modelProfissionais.create(
        {CPF_CNPJ, nome, nomeFantasia, pronomes, pessoaJuridica, email, senha, telefone, atendimentoDomiciliar, descricao}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Profissional cadastrado com sucesso!"
            })
        }
    ).catch(
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
router.get('/ListarProfissionalCNPJ/:CPF_CNPJ', (req, res)=>{
    
    let {CPF_CNPJ} = req.params;

    modelProfissionais.findByPk(CPF_CNPJ)
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
router.get('/ListarProfissionaisEmail/:email/:senha', (req, res)=>{

    let {email, senha} = req.params;
    console.log(JSON.stringify(email))
    console.log(JSON.stringify(senha))

    modelProfissionais.findOne({
        attributes:['CPF_CNPJ','Email', 'Senha'],
        where:{email, senha}})

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

router.get('/ListarTodaInfoProfissional/:CPF_CNPJ', (req, res) => {

    let CPF_CNPJ = req.params.CPF_CNPJ;

    modelProfissionais.findOne({ 
        where: { CPF_CNPJ: CPF_CNPJ },
        include: { all: true} 
    }).then(
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
})

router.get('/ListarPerfilProfissional/:CPF_CNPJ', (req, res)=>{
    let {CPF_CNPJ} = req.params;

    modelProfissionais.findByPk(CPF_CNPJ,{include: modelServicos})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Perfil Profissional listado com sucesso!",
                data: response
            })
        }
    )
    .catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao listar Perfil Profissional!",
                erroObject:erro
            });
        }
    )
})

//Rota de Alteração
router.put('/alterarProfissionais/:CPF_CNPJ', (req, res) =>{

    let {FK_Profissionais_Enderecos, nome, nomeFantasia, pronomes, pessoaJuridica, email, senha, telefone, atendimentoDomiciliar, descricao} = req.body;
    let CPF_CNPJ = req.params.CPF_CNPJ;

    modelProfissionais.update(
        {FK_Profissionais_Enderecos, nome, nomeFantasia, pronomes, pessoaJuridica, email, senha, telefone, atendimentoDomiciliar, descricao},
        {where:{CPF_CNPJ}}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Profissional alterado com sucesso!'
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
router.delete('/excluirProfissionais:CPF_CNPJ', (req, res)=>{

    console.log(req.params);

    let {CPF_CNPJ} = req.params;

    modelProfissionais.destroy(
        {where:{CPF_CNPJ}}
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