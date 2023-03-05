/*
**********************************************************************
*Este arquivo tem todas as rotas do modelo da 
*tabela de clientes
**********************************************************************
*
*CAMPOS DA TABELA CLIENTES PARA REFERÊNCIA:
* IDCliente * nome * email * senha * fotoPerfil
*
* FK_Colecoes_Clientes * FK_Avaliações_Clientes
*/

//mportação do Express, do modelo e do gerenciador de rotas
const express = require('express');
const modelClientes = require('../models/ModelClientes');
const router = express.Router();

//INÍCIO DAS ROTAS DE CRUD DA TABELA CLIENTES

//Rota de Cadastro pelo Express
router.post('/cadastrarCliente', (req, res) => {
    console.log(req.body);

    //Declaração das variáveis que irão representar os campos da tabela
    let {IDCliente, nome, email, senha, fotoPerfil} = req.body;

    //Crie estes campos...
    modelClientes.create(
        {IDCliente, nome, email, senha, fotoPerfil}
    ).then(
        /*
        *...e então, caso tenha dado certo, retorne este status HTTP e 
        *este arquivo JSON...
        */
        () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: 'Cliente cadastrado com sucesso!'
            })
        }
    ).catch(
        /*
        *...caso "pegue" um erro, retorne seu status HTTP e este arquivo 
        *JSON com o objeto do erro
        */
        (erro) => {
            return res.status(201).json({
                erroStatus: true,
                mensagemStatus: 'Erro ao cadastrar cliente',
                erroObject: erro
            })
        }
    )
});

//Rota de Listagem
router.get('/listarClientes', (req, res) => {

    //Ache todos os registros...
    modelClientes.findAll()
    .then(
        /*
        *...e então, caso dê certo, retorne este objeto JSON com o estado 
        *HTTP e a listagem...
        */
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: 'Clientes listados com sucesso!',
                data: response
            })
        }
    ).catch(
        /*
        *...caso "pegue" um erro, retorne este objeto JSON com o estado 
        *HTTP e o objeto de erro
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

//Rota de Alteração


//Rota de Exclusão


//FIM DAS ROTAS DE CRUD DA TABELA CLIENTES

//Exportação das rotas
module.exports = router;