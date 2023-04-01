/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Avaliações
*********************************************************************
* ID_Avaliacao, Nota, Titulo, Descricao
*/

//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelAvaliacoes = require('../models/ModelAvaliacoes');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE AVALIAÇÕES

//Rota de cadastro
router.post('/cadastrarAvaliacao', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {Nota, Titulo, Descricao} = req.body;

    //Crie estes campos...
    modelAvaliacoes.create(
        {Nota, Titulo, Descricao}
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
router.get('/listarAvaliacoes', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelAvaliacoes.findAll()
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
router.put('/alterarAvaliacao', (req, res) =>{

    let {Nota, Titulo, Descricao} = req.body;

    modelAvaliacoes.update(
        {Nota, Titulo, Descricao},
        {where:{ID_Avaliacao}}

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
router.delete('/excluirAvaliacao:ID_Avaliacao', (req, res)=>{

    console.log(req.params);

    let {ID_Avaliacao} = req.params;

    modelAvaliacoes.destroy(
        {where:{ID_Avaliacao}}
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

//FIM DAS ROTAS DE CRUD TABELA DE AVALIAÇÕES

//Exportação das rotas
module.exports = router;