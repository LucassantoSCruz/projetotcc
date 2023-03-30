
const express = require('express');
const modelProfissionais = require('../models/ModelProfissionais');
const router = express.Router();


//Rota de cadastro
router.post('/cadastrarProfissonal', (req, res) => {
    console.log(req.body);
    
    let {cpf, nome, CNPJ_CPF, email, senha, descricao } = req.body;

    modelProfissionais.create(
        {cpf, nome, CNPJ_CPF, email, senha, descricao }
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

    modelProfissionais.findAll()
    .then(
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Profissionais listados com sucesso!',
                data: response
            })        
        }
    ).catch(
    
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

    let {cpf, nome, CNPJ_CPF, email, senha, descricao} = req.body;

    modelProfissionais.update(
        { nome, CNPJ_CPF, email, senha, descricao},
        {where:{ cpf}}

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

    let {cpf} = req.params;

    modelProfissionais.destroy(
        {where:{cpf}}
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



//Exportação das rotas
module.exports = router;