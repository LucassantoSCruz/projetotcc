/*
*********************************************************************
* Este arquivo tem todas as rotas do modelo da tabela de 
* Categorias
*********************************************************************
* ID_Categoria, Nome
*/

//Importação do Express, do modelo e do gerenciador de rotas do Express
const express = require('express');
const modelCategorias = require('../models/ModelCategorias');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD TABELA DE CATEGORIAS

//Rota de cadastro
router.post('/cadastrarCategoria', (req, res) => {
    console.log(req.body);
    
    //Declaração das variáveis que irão representar os campos da tabela
    let {ID_Categoria, Nome} = req.body;

    //Crie estes campos...
    modelCategorias.create(
        {ID_Categoria, Nome}
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
router.get('/listarCategorias', (req, res) => {

    //Procure todos os campos e registros desta tabela...
    modelCategorias.findAll()
    .then(
        /*
        *...e então, caso dê certo, envie este arquivo JSON 
        *com o status HTTP e a listagem...
        */
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Listados com sucesso!',
                Nome: response
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
router.put('/alterarCategoria', (req, res) =>{

    let {ID_Categoria, Nome} = req.body;

    modelCategorias.update(
        {ID_Categoria, Nome},
        {where:{ID_Categoria}}

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
router.delete('/excluirCategoria:ID_Categoria', (req, res)=>{

    console.log(req.params);

    let {ID_Categoria} = req.params;

    modelCategorias.destroy(
        {where:{ID_Categoria}}
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

//FIM DAS ROTAS DE CRUD TABELA DE CATEGORIAS

//Exportação das rotas
module.exports = router;