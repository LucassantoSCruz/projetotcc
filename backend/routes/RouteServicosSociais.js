/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Serviços Sociais 
*********************************************************************
* ID_ServicoSocial, Data, Titulo, Descricao
*/

//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelServicosSociais = require('../models/ModelServicosSociais');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE SERVIÇOS SOCIAIS

//Rota de cadastro
router.post('/cadastrarServicoSocial', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {Data, Titulo, Descricao} = req.body;

    //Crie estes campos...
    modelServicosSociais.create(
        {Data, Titulo, Descricao}
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
router.get('/listarServicosSociais', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelServicosSociais.findAll()
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
router.put('/alterarServicoSocial', (req, res) =>{

    let {Data, Titulo, Descricao} = req.body;

    modelServicosSociais.update(
        {Data, Titulo, Descricao},
        {where:{ ID_ServicoSocial}}

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
router.delete('/excluirServicoSocial:ID_ServicoSocial', (req, res)=>{

    console.log(req.params);

    let {ID_ServicoSocial} = req.params;

    modelServicosSociais.destroy(
        {where:{ID_ServicoSocial}}
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

//FIM DAS ROTAS DE CRUD TABELA DE SERVIÇOS SOCIAIS

//Exportação das rotas
module.exports = router;