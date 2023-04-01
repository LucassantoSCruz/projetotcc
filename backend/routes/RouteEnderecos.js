/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Endereços 
*********************************************************************
* ID_Endereco, Latitude, Longitude, CEP, Titulo, Complemento
*/

//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelEnderecos = require('../models/ModelEnderecos');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE ENDEREÇOS

//Rota de cadastro
router.post('/cadastrarEndereco', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {Latitude, Longitude, CEP, Titulo, Complemento} = req.body;

    //Crie estes campos...
    modelEnderecos.create(
        {Latitude, Longitude, CEP, Titulo, Complemento}
    ).then(
        //...e então, caso dê certo, retorne este objeto JSON com o status HTTP...
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "Cadastrado com sucesso!"
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
            mensagemStatus: "Erro ao cadastrar",
            erroObject: erro
        })
       }
    )
});

//Rota de listagem
router.get('/listarEndereco', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelEnderecos.findAll()
    .then(
        /*
        *...e então, caso dê certo, envie este arquivo JSON 
        *com o status HTTP e a listagem...
        */
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Listados com sucesso!',
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
                mensagemStatus: 'Erro ao listar',
                erroObject: erro
            })
        }
    )
});

//Rota de Alteração
router.put('/alterarEndereco', (req, res) =>{

    let {Latitude, Longitude, CEP, Titulo, Complemento} = req.body;

    modelEnderecos.update(
        {Latitude, Longitude, CEP, Titulo, Complemento},
        {where:{ ID_Endereco}}

    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Alterado com sucesso!'
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
router.delete('/excluirEndereco:ID_Endereco', (req, res)=>{

    console.log(req.params);

    let {ID_Endereco} = req.params;

    modelEnderecos.destroy(
        {where:{ID_Endereco}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Excluido'
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

//FIM DAS ROTAS DE CRUD TABELA DE ENDEREÇOS

//Exportação das rotas
module.exports = router;