/*
***************************************************************************
*Este arquivo contém as rotas do modelo da tabela de serviços
***************************************************************************
*
*CAMPOS DA TABELA SERVICOS PARA REFERÊNCIA:
*IDServico, preco, descricao, titulo, duracao
*
*FK_Categorias_Servicos
*/

//Importação do Express, do modelo e do Router do Express
const express = require('express');
const modelCategorias = require('../models/ModelCategorias');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD DA TABELA SERVICOS

//Rota de cadastro
router.post('/cadastrarCategoria', (req, res) => {
    console.log(req.body);

    //Declaração das variáveis que irão representar os campos da tabela
    let {IDServico, preco, descricao, titulo, duracao} = req.body;

    //Crie estes campos...
    modelCategorias.create(
        {IDServico, preco, descricao, titulo, duracao}
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
router.get('/listarCategorias', (req, res) => {

    //Ache todos os registros...
    modelCategorias.finAll()
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

//Rota de alteração

//Rota de Exclusão

//INÍCIO DAS ROTAS DE CRUD DA TABELA SERVICOS

//Exportação
module.exports = router;